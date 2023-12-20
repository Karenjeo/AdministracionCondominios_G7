import { Component, OnInit } from '@angular/core';
import { Mantenimientos } from './mantenimientos';
import { MantenimientosService } from './mantenimientos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mantenimientos',
  templateUrl: './mantenimientos.component.html',
  styleUrls: ['./mantenimientos.component.css']
})
export class MantenimientosComponent implements OnInit {

  mantenimiento : Mantenimientos[];

  constructor(private service:MantenimientosService,private router:Router){}
  ngOnInit(): void {
    this.listarMan();
  }


  //listar
  listarMan(){
    this.service.listarMantenimiento().subscribe((datos)=>{
      this.mantenimiento = datos;
      console.log(datos);
    })
  }

  eliminar(id_mantenimiento: number): void {
    this.service.eliminarV2(id_mantenimiento).subscribe(
      () => {
        console.log('Unidad eliminada correctamente.');
        // Actualizar la lista después de eliminar
        this.listarMan();
      },
      error => {
        console.error('Error al eliminar la unidad:', error);
      }
    );
  }

  IrAPersonal(){
    this.router.navigate(['/unidades']);
  }
  irAResidentes() {
    this.router.navigate(['/residentes']);
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
  

}
