import { Component } from '@angular/core';
import { Propiedades } from '../propiedades';
import { PropiedadesService } from '../propiedades.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-guardar-propiedades',
  templateUrl: './guardar-propiedades.component.html',
  styleUrls: ['./guardar-propiedades.component.css']
})
export class GuardarPropiedadesComponent {
  propiedades:Propiedades = new Propiedades();


  constructor(private service:PropiedadesService, private actived:ActivatedRoute, private router:Router){}

  //metodo para guardar

  public guardarPropiedades(){
    this.service.guardarPropiedad(this.propiedades).subscribe({
      next:(datos)=>{
        console.log("datos guardados");
        this.irPagina();
      }
    })
  }

  irPagina(){
    this.router.navigate(['/propiedades'])
  }

}
