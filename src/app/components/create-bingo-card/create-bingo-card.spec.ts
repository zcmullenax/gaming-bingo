import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBingoCard } from './create-bingo-card';

describe('CreateBingoCard', () => {
  let component: CreateBingoCard;
  let fixture: ComponentFixture<CreateBingoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBingoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBingoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
