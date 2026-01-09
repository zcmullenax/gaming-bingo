import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettings } from './user-settings';

describe('UserSettings', () => {
  let component: UserSettings;
  let fixture: ComponentFixture<UserSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSettings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
