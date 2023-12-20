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

  ///validaciones
  validarCampos(){
  a
    var tarjeta = (<HTMLInputElement>document.getElementById("tarjeta")).value;
    var nombreTarjeta = (<HTMLInputElement>document.getElementById("nombreTarjeta")).value;
    var fecha = (<HTMLInputElement>document.getElementById("fecha")).value;
    var cvv = (<HTMLInputElement>document.getElementById("cvv")).value;
  
    if(nombre == "" || apellido == "" || direccion == "" || ciudad == "" || estado == "" || codigo == "" || telefono == "" || email == "" || tarjeta == "" || nombreTarjeta == "" || fecha == "" || cvv == ""){
      alert("Todos los campos son obligatorios");
    }else{
      alert("Compra realizada con exito");
    }
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

 
