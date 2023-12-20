import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarMantenimientoComponent } from './guardar-mantenimiento.component';

describe('GuardarMantenimientoComponent', () => {
  let component: GuardarMantenimientoComponent;
  let fixture: ComponentFixture<GuardarMantenimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarMantenimientoComponent]
    });
    fixture = TestBed.createComponent(GuardarMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
