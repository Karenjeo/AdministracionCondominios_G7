import { Component, OnInit } from '@angular/core';
import { Mantenimientos } from '../mantenimientos';
import { ActivatedRoute, Router } from '@angular/router';
import { MantenimientosService } from '../mantenimientos.service';

@Component({
  selector: 'app-guardar-mantenimiento',
  templateUrl: './guardar-mantenimiento.component.html',
  styleUrls: ['./guardar-mantenimiento.component.css']
})
export class GuardarMantenimientoComponent implements OnInit{

 mantenimientos : Mantenimientos = new Mantenimientos();
 id_propiedades:number;

 constructor(private service:MantenimientosService, private router:Router, private activatedRouter:ActivatedRoute){}


 ngOnInit() {
  this.activatedRouter.paramMap.subscribe((params) => {
    const id_propiedades = params.get('id_propiedades');
    if (id_propiedades !== null) {
      this.id_propiedades = +id_propiedades;
    }
  });
}


public guardarMantenimientos(){
  this.service.guardarMan(this.id_propiedades, this.mantenimientos).subscribe({
    next:(datos)=>{
      console.log(datos);
      this.irListaMantimientos();
    }
  })
}

irListaMantimientos(){
  this.router.navigate(['/mantenimientos'])
}

}
