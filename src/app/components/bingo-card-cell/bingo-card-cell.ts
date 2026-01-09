import { Component, Input } from '@angular/core';
import { BingoCell } from '../../models/bingo-cell.model';

@Component({
  selector: 'app-bingo-card-cell',
  imports: [],
  templateUrl: './bingo-card-cell.html',
  styleUrl: './bingo-card-cell.scss',
})
export class BingoCardCell {

  @Input() bingoCell: BingoCell | undefined;

  getCategoryName(): string | undefined {
    return this.bingoCell?.categoryName;
  }

}
