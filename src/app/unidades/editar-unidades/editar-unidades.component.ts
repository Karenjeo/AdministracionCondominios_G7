// editar-unidades.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnidadesService } from '../unidades.service';
import { Unidades } from '../unidades';

@Component({
  selector: 'app-editar-unidades',
  templateUrl: './editar-unidades.component.html',
  styleUrls: ['./editar-unidades.component.css']
})
export class EditarUnidadesComponent implements OnInit {

  unidad: Unidades = new Unidades();
  idUnidad: number | null;

  constructor(
    private route: ActivatedRoute,
    private unidadesService: UnidadesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Obtener el ID de la unidad de la URL
    const idParam = this.route.snapshot.paramMap.get('id');
    this.idUnidad = idParam ? +idParam : null;

    // Verificar si se proporcionó un ID antes de intentar obtener la información de la unidad
    if (this.idUnidad !== null) {
      // Obtener la información de la unidad con el ID
      this.unidadesService.getById(this.idUnidad).subscribe(
        data => {
          this.unidad = data;
        },
        error => {
          console.error('Error al obtener la unidad:', error);
        }
      );
    } else {
      console.error('ID de la unidad no proporcionado en la URL.');
    }
  }

  guardarCambios(): void {
    // Llamar al servicio para editar la unidad
    if (this.idUnidad !== null) {
      this.unidadesService.editarUnidad(this.unidad, this.idUnidad).subscribe(
        unidadEditada => {
          console.log('Unidad editada correctamente:', unidadEditada);
          // Redirigir a la lista de unidades después de editar
          this.router.navigate(['/unidades']);
        },
        error => {
          console.error('Error al editar la unidad:', error);
        }
      );
    } else {
      console.error('ID de la unidad no proporcionado en la URL.');
    }
  }
}
