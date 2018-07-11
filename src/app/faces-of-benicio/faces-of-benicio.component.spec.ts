import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacesOfBenicioComponent } from './faces-of-benicio.component';

describe('FacesOfBenicioComponent', () => {
  let component: FacesOfBenicioComponent;
  let fixture: ComponentFixture<FacesOfBenicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacesOfBenicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacesOfBenicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
