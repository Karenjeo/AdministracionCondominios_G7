import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualizar-mantenimiento',
  templateUrl: './actualizar-mantenimiento.component.html',
  styleUrls: ['./actualizar-mantenimiento.component.css']
})
export class ActualizarMantenimientoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  validarCampos(){
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    var apellido = (<HTMLInputElement>document.getElementById("apellido")).value;
    var direccion = (<HTMLInputElement>document.getElementById("direccion")).value;
    var ciudad = (<HTMLInputElement>document.getElementById("ciudad")).value;
    var estado = (<HTMLInputElement>document.getElementById("estado")).value;
    var codigo = (<HTMLInputElement>document.getElementById("codigo")).value;
     
    if(nombre == "" || apellido == "" || direccion == "" || ciudad == "" || estado == "" || codigo == "" || telefono == "" || email == "" || tarjeta == "" || nombreTarjeta == "" || fecha == "" || cvv == ""){
      alert("Todos los campos son obligatorios");
    }else{
      alert("Compra realizada con exito");
    }
  }
}
