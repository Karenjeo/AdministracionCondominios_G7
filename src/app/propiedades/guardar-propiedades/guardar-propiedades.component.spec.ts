import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarPropiedadesComponent } from './guardar-propiedades.component';

describe('GuardarPropiedadesComponent', () => {
  let component: GuardarPropiedadesComponent;
  let fixture: ComponentFixture<GuardarPropiedadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarPropiedadesComponent]
    });
    fixture = TestBed.createComponent(GuardarPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
