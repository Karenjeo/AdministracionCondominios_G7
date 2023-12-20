import { Component } from '@angular/core';
import { ResidentesService } from '../residentes.service';
import { Residentes } from '../residentes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardar-residentes',
  templateUrl: './guardar-residentes.component.html',
  styleUrls: ['./guardar-residentes.component.css']
})
export class GuardarResidentesComponent {

  id_unidad: number | null;  // Permitir valores nulos
  nuevoResidente: Residentes = new Residentes();

  constructor(private residentesService: ResidentesService, private router: Router) { 
    // Aquí puedes obtener el ID de la unidad, por ejemplo, desde un servicio
    this.residentesService.obtenerTodosUnidades().subscribe(
      unidades => {
        // Asignar el primer ID de unidad disponible (esto depende de tu lógica específica)
        this.id_unidad = unidades.length > 0 ? unidades[0].id_unidad : null;
      },
      error => {
        console.error('Error al obtener las unidades:', error);
      }
    );
  }

  guardarResidente(): void {
    // Verificar si id_unidad es null antes de usarlo
    if (this.id_unidad === null) {
      console.error('ID de la unidad no proporcionado.');
      return;
    }

    this.residentesService.guardarResidenteConUnidades(this.nuevoResidente, this.id_unidad)
      .subscribe(
        residenteGuardado => {
          console.log('Residente guardado correctamente:', residenteGuardado);
          // Redirigir o realizar otras acciones necesarias después de guardar
          this.IrAResidentes();
        },
        error => {
          console.error('Error al guardar el residente:', error);
        }
      );
  }

  IrAResidentes() {
    this.router.navigate(['/residentes']);
  }
}
