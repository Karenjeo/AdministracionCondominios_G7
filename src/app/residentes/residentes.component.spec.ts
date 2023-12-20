import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentesComponent } from './residentes.component';

describe('ResidentesComponent', () => {
  let component: ResidentesComponent;
  let fixture: ComponentFixture<ResidentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentesComponent]
    });
    fixture = TestBed.createComponent(ResidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
