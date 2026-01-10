import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclamationPointBingo } from './exclamation-point-bingo';

describe('ExlamationPointBingo', () => {
  let component: ExclamationPointBingo;
  let fixture: ComponentFixture<ExclamationPointBingo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExclamationPointBingo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExclamationPointBingo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
