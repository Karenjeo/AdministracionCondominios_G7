import { Component, OnInit } from '@angular/core';
import { Propiedades } from '../propiedades';
import { PropiedadesService } from '../propiedades.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-propiedades',
  templateUrl: './editar-propiedades.component.html',
  styleUrls: ['./editar-propiedades.component.css']
})
export class EditarPropiedadesComponent implements OnInit{

  id_propiedades:number;
  propiedades:Propiedades= new Propiedades();

  constructor(private service:PropiedadesService, private actived:ActivatedRoute, private router:Router){}


  ngOnInit(){
    //traer el id
    this.actived.paramMap.subscribe((params)=>{
      const id_propiedades = params.get("id_propiedades");
      if(id_propiedades !==null){
        this.id_propiedades =+ id_propiedades;

        //obtener los datos

        this.service.obtenerPropiedadPorId(this.id_propiedades).subscribe((propiedades)=>{
          this.propiedades = propiedades;
        })
      }
    })
  }


  //metodo para actualza
  public actualizarPropiedades(){
    this.service.actualizarPropiedad(this.id_propiedades,this.propiedades).subscribe({next:(datos)=>{
        this.irPagina();
    }})
  }

  //ir a la otra página
  irPagina(){
    this.router.navigate(['/propiedades'])
  }
}
