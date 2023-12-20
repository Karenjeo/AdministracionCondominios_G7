import { Component,OnInit} from '@angular/core';
import { Residentes } from './residentes';
import { ResidentesService } from './residentes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-residentes',
  templateUrl: './residentes.component.html',
  styleUrls: ['./residentes.component.css']
})
export class ResidentesComponent implements OnInit {
  residentes: Residentes[] = [];

  constructor(private residentesService: ResidentesService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerTodosLosResidentes();
  }
  ///valiaciones 
  validarCampos(){
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    var apellido = (<HTMLInputElement>document.getElementById("apellido")).value;
    var direccion = (<HTMLInputElement>document.getElementById("direccion")).value;
    var ciudad = (<HTMLInputElement>document.getElementById("ciudad")).value;
     
  
    if(nombre == "" || apellido == "" || direccion == "" || ciudad == "" || estado == "" || codigo == "" || telefono == "" || email == "" || tarjeta == "" || nombreTarjeta == "" || fecha == "" || cvv == ""){
      alert("Todos los campos son obligatorios");
    }else{
      alert("Compra realizada con exito");
    }
  }
  obtenerTodosLosResidentes(): void {
    this.residentesService.obtenerTodos().subscribe(
      data => {
        this.residentes = data;
      },
      error => {
        console.error('Error al obtener los residentes:', error);
      }
    );
  }

  eliminarResidente(id_residente: number): void {
    this.residentesService.eliminarResidente(id_residente).subscribe(
      () => {
        console.log('Residente eliminado correctamente.');
        // Actualizar la lista después de eliminar
        this.obtenerTodosLosResidentes();
      },
      error => {
        console.error('Error al eliminar el residente:', error);
      }
    );
  }

  GuardarResidentes(){
    this.router.navigate(['/guardar-residente']);
  }

  irAUnidades() {
    this.router.navigate(['/unidades']);
  }
  irAMantenimiento() {
    this.router.navigate(['/mantenimientos']);
  }
  irAPagos() {
    this.router.navigate(['/pagos']);
  }
  irAPropiedades() {
    this.router.navigate(['/propiedades']);
  }
  irAResidentes() {
    this.router.navigate(['/residentes']);
  }
}
