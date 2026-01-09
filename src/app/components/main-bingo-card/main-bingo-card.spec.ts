import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBingoCard } from './main-bingo-card';

describe('MainBingoCard', () => {
  let component: MainBingoCard;
  let fixture: ComponentFixture<MainBingoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainBingoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainBingoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
