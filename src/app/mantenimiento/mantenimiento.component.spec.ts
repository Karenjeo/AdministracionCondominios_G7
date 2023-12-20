import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoComponent } from './mantenimiento.component';

describe('MantenimientoComponent', () => {
  let component: MantenimientoComponent;
  let fixture: ComponentFixture<MantenimientoComponent>;

    validarCampos(){
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    var apellido = (<HTMLInputElement>document.getElementById("apellido")).value;
    var direccion = (<HTMLInputElement>document.getElementById("direccion")).value;
    var ciudad = (<HTMLInputElement>document.getElementById("ciudad")).value;
    var estado = (<HTMLInputElement>document.getElementById("estado")).value;
    var codigo = (<HTMLInputElement>document.getElementById("codigo")).value;
    var telefono = (<HTMLInputElement>document.getElementById("telefono")).value;
    var email = (<HTMLInputElement>document.getElementById("email")).value;
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
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
