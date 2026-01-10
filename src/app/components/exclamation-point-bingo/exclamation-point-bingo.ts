import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exlamation-point-bingo',
  imports: [],
  templateUrl: './exclamation-point-bingo.html',
  styleUrl: './exclamation-point-bingo.scss',
  host: {
    class: 'config-panel',
  },
})
export class ExclamationPointBingo {
  possibleRolls: string[] = ['B1','I1','N1','G1','O1','B2','I2','N2','G2','O2','B3','I3','N3','G3','O3','B4','I4','N4','G4','O4','B5','I5','N5','G5','O5'];
  @Input() currentRoll: string = "";

  // ngOnInit(): void {
  //   this.currentRoll = this.getRandomCategory();
  // }

  // ngOnChanges(): void {
  //   this.currentRoll = this.getRandomCategory();
  // }

  // getRandomCategory(): string {
  //   const randomIndex = Math.floor(Math.random() * this.possibleRolls.length);
  //   this.currentRoll = this.possibleRolls[randomIndex];
  //   return this.possibleRolls[randomIndex];
  // }

}
