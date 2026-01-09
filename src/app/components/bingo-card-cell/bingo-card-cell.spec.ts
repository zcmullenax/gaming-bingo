import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoCardCell } from './bingo-card-cell';

describe('BingoCardCell', () => {
  let component: BingoCardCell;
  let fixture: ComponentFixture<BingoCardCell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BingoCardCell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BingoCardCell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
