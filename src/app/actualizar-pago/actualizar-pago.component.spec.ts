import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPagoComponent } from './actualizar-pago.component';

describe('ActualizarPagoComponent', () => {
  let component: ActualizarPagoComponent;
  let fixture: ComponentFixture<ActualizarPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarPagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
