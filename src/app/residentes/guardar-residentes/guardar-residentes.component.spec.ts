import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarResidentesComponent } from './guardar-residentes.component';

describe('GuardarResidentesComponent', () => {
  let component: GuardarResidentesComponent;
  let fixture: ComponentFixture<GuardarResidentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarResidentesComponent]
    });
    fixture = TestBed.createComponent(GuardarResidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
