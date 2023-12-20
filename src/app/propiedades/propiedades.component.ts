import { Component } from '@angular/core';
import { PropiedadesService } from './propiedades.service';
import { Propiedades } from './propiedades';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent {


  constructor(private service:PropiedadesService, private enrutador:Router,private router:Router){}

  propiedades:Propiedades[] =[];

  ngOnInit(){
    this.listarPropiedades();
  }

  //meetodo para listar
  public listarPropiedades(){
    this.service.listarPropiedades().subscribe((datos)=>{
      this.propiedades = datos;
      console.log(datos);
    })
  }


  //metodo para redirigir a editara
  editarPropiedad(id_propiedad:number){

    this.enrutador.navigate(['/propiedades'])

  }

  //eliminar
  eliminarPropiedad(id_propiedad:number){
    this.service.eliminarPropiedad(id_propiedad).subscribe({
      next:(datos)=>{
        console.log("eliminado correctamente");
        this.listarPropiedades();
      }
    })
  }

  eliminar(id_propiedad: number): void {
    this.service.eliminarV2(id_propiedad).subscribe(
      () => {
        console.log('propiedad eliminada correctamente.');
        // Actualizar la lista después de eliminar
        this.listarPropiedades();
      },
      error => {
        console.error('Error al eliminar la propiedad:', error);
      }
    );
  }
  GuardarPropiedades(){
    this.enrutador.navigate(['/guardar-propiedades']);
  }

  irAResidentes() {
    this.router.navigate(['/residentes']);
  }
  irAMantenimiento() {
    this.router.navigate(['/mantenimientos']);
  }
  irAUnidades() {
    this.router.navigate(['/unidades']);
  }
  irAPropiedades() {
    this.router.navigate(['/propiedades']);
  }
  irAPagos() {
    this.router.navigate(['/pagos']);
  }
  

}
