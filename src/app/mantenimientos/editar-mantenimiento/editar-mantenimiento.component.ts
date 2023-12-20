import { Component, OnInit } from '@angular/core';
import { Mantenimientos } from '../mantenimientos';
import { MantenimientosService } from '../mantenimientos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-mantenimiento',
  templateUrl: './editar-mantenimiento.component.html',
  styleUrls: ['./editar-mantenimiento.component.css']
})
export class EditarMantenimientoComponent implements OnInit{

  mantenimientos : Mantenimientos = new Mantenimientos();
  id_mantenimiento:number;
 
  constructor(private service:MantenimientosService, private router:Router, private activatedRouter:ActivatedRoute){}


  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((params)=>{
      const id_mantenimiento = params.get("id_mantenimiento");
      if(id_mantenimiento  !== null){
        this.id_mantenimiento =+id_mantenimiento;

        //obtener los datos
        this.service.obtenerPorId(this.id_mantenimiento).subscribe((mantenimiento=>{
          this.mantenimientos = mantenimiento;
        }))
      }
    })
  }

  actualizarMantenimiento(){
    this.service.editarMan(this.id_mantenimiento, this.mantenimientos).subscribe({
      next:(datos)=>{
        this.irOtraPagina();

      }
    })
  }

  irOtraPagina(){
    this.router.navigate(['/mantenimientos'])
  }

}
