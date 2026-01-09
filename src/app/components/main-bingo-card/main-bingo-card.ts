import { Component, Input } from '@angular/core';
import { BingoCardCell } from '../bingo-card-cell/bingo-card-cell';
import { BingoCell } from '../../models/bingo-cell.model';


@Component({
  selector: 'app-main-bingo-card',
  imports: [BingoCardCell],
  templateUrl: './main-bingo-card.html',
  styleUrl: './main-bingo-card.scss',
})
export class MainBingoCard {

  @Input() listOfCells: BingoCell[] = [];

  availableClasses: string[] = ['card-cell blue', 
    'card-cell green', 'card-cell purple', 'card-cell orange', 
    'card-cell rose', 'card-cell teal', 'card-cell yellow'];


  getRandomClass(): string {
    const randomIndex = Math.floor(Math.random() * this.availableClasses.length);
    return this.availableClasses[randomIndex];
  }

  getBingoCell(id: string): BingoCell | undefined {
    return this.listOfCells.find(x => x.cardPositionId == id);
  }

}
