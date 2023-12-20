import { Component } from '@angular/core';
import { UnidadesService } from '../unidades.service';
import { Unidades } from '../unidades';
import { Router } from '@angular/router';
import { Propiedades } from 'src/app/propiedades/propiedades';
@Component({
  selector: 'app-guardar-unidades',
  templateUrl: './guardar-unidades.component.html',
  styleUrls: ['./guardar-unidades.component.css']
})
export class GuardarUnidadesComponent {

  nuevaUnidad: Unidades = new Unidades();
  idPropiedad: number; // Asegúrate de obtener este valor, por ejemplo, desde un servicio o un formulario

  constructor(private unidadesService: UnidadesService, private router: Router) { }

  guardarUnidad(): void {
    this.unidadesService.guardarUnidadConPropiedad(this.nuevaUnidad, this.idPropiedad)
      .subscribe(
        unidadGuardada => {
          console.log('Unidad guardada correctamente:', unidadGuardada);
          // Redirigir a la lista de unidades
          this.router.navigate(['/unidades']);
        },
        error => {
          console.error('Error al guardar la unidad:', error);
        }
      );
  }
}

