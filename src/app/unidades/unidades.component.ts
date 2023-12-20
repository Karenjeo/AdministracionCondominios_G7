import { Component, OnInit } from '@angular/core';
import { UnidadesService } from './unidades.service';
import { Unidades } from './unidades';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit {

  unidades: Unidades[] = [];

  constructor(private unidadesService: UnidadesService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerTodasLasUnidades();
  }

  obtenerTodasLasUnidades(): void {
    this.unidadesService.obtenerTodos().subscribe(
      data => {
        this.unidades = data;
        console.log(data);
      },
      error => {
        console.error('Error al obtener las unidades:', error);
      }
    );
  }

  eliminarUnidad(id_unidad: number): void {
    this.unidadesService.eliminar(id_unidad).subscribe(
      () => {
        console.log('Unidad eliminada correctamente.');
        // Actualizar la lista después de eliminar
        this.obtenerTodasLasUnidades();
      },
      error => {
        console.error('Error al eliminar la unidad:', error);
      }
    );
  }

  irAGuardarUnidad() {
    this.router.navigate(['/guardar-unidades']);
  }

  editarUnidad(id_unidad: number): void {
    this.router.navigate(['/editar-unidad', id_unidad]);
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
  irAUnidades() {
    this.router.navigate(['/unidades']);
  }
  

  

}
