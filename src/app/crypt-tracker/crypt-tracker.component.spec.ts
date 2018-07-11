import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptTrackerComponent } from './crypt-tracker.component';

describe('CryptTrackerComponent', () => {
  let component: CryptTrackerComponent;
  let fixture: ComponentFixture<CryptTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
