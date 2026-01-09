import { Component, OnInit, OnDestroy } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumber } from 'primeng/inputnumber';
import { BingoCategories, BingoCategory } from '../../data/category-data';
import { ExplicitBingoCard } from '../../models/explicit-bingo-card.model';
import { BingoCell } from '../../models/bingo-cell.model';
import { BingoCard } from '../../models/bingo-card.model';
import { MainBingoCard } from '../main-bingo-card/main-bingo-card';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-create-bingo-card',
  imports: [InputGroupModule, InputGroupAddonModule, InputNumber, ButtonModule, MainBingoCard, FormsModule],
  templateUrl: './create-bingo-card.html',
  styleUrl: './create-bingo-card.scss',
})
export class CreateBingoCard implements OnInit, OnDestroy {

  // constructor(private defaultCategories = BingoCategories;) {}
  defaultCategories: BingoCategory[] = BingoCategories.categories;
  freeSpace: BingoCell = new BingoCell();
  indexForRemoval!: number;
  bingoCard!: ExplicitBingoCard;
  listOfCardPositionIds = ['b1','i1','n1','g1','o1','b2','i2','n2','g2','o2','b3','i3','n3','g3','o3','b4','i4','n4','g4','o4','b5','i5','n5','g5','o5'];
  currentCardCells: BingoCell[] = [];
  showGeneratedCard: boolean = false;
  numberOfCards: number = 1;
  
  listOfCards: BingoCell[][] = [];

  ngOnInit(): void {      
  }

  ngOnDestroy(): void {
    this.showGeneratedCard = false;
    this.currentCardCells = [];
  }
  
  createCards(): void {
    this.showGeneratedCard = false;
    this.listOfCards = [];
    for (let i = 0; i < this.numberOfCards; i++) {
      const cardCells = this.generateCells();
      this.listOfCards.push(cardCells);
    }
    this.showGeneratedCard = true;
  }

  generateCells(): BingoCell[] {
    let availableCategories = this.defaultCategories.map(category =>({
      ...category
    }));    
    this.currentCardCells = [];
    const bingoCellList: BingoCell[] = [];
    for(let i = 0; i < 25; i++) {
      const cellToAdd: BingoCell = new BingoCell;
      if (i > 0) {
        availableCategories = this.removeCategory(this.indexForRemoval, availableCategories);
      }
      if (i == 12) {
        const free = this.generateFreeSpace();
        cellToAdd.categoryId = free.categoryId;
        cellToAdd.categoryName = free.categoryName;
        cellToAdd.cardPositionId = free.cardPositionId;
        bingoCellList.push(cellToAdd);
        continue
      }
      const randomCategory = this.getRandomCategory(availableCategories);
      cellToAdd.cardPositionId = this.listOfCardPositionIds[i];
      cellToAdd.categoryId = randomCategory.id.toString();
      cellToAdd.categoryName = randomCategory.categoryName;
      bingoCellList.push(cellToAdd);
    }
    console.log(bingoCellList);
    console.log(this.defaultCategories);
    this.currentCardCells = bingoCellList;
    
    return bingoCellList;
  }

  getRandomCategory(availableCategories: BingoCategory[]) {
    const randomIndex = Math.floor(Math.random() * availableCategories.length);
    this.indexForRemoval = randomIndex;
    return availableCategories[randomIndex];
  }

  removeCategory(index: number, categories: BingoCategory[]): BingoCategory[] {
    categories.splice(index, 1);
    return categories;
  }

  generateFreeSpace(): BingoCell {
    this.freeSpace.categoryId = '0';
    this.freeSpace.categoryName = 'Free';
    this.freeSpace.cardPositionId = 'n3';
    return this.freeSpace;
  }

}
