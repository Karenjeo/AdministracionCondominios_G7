import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarPagoComponent } from './guardar-pago.component';

describe('GuardarPagoComponent', () => {
  let component: GuardarPagoComponent;
  let fixture: ComponentFixture<GuardarPagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarPagoComponent]
    });
    fixture = TestBed.createComponent(GuardarPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
