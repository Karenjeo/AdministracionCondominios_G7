import { Component, OnInit } from '@angular/core';
import { Pagos } from './pagos';
import { ActivatedRoute, Router } from '@angular/router';
import { PagosService } from './pagos.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit{

  pagos:Pagos[];
  constructor(private service:PagosService, private router:Router, private enrutador:Router,private activad:ActivatedRoute){}

  ngOnInit(): void {

    this.listarPagos();
    
  }

  public listarPagos(){

    this.service.listarPagos().subscribe((datos)=>{
      this.pagos = datos;
      console.log(datos);
    })

  }

  //metodo para ir a editar
  editarPagos(id_pago:number){
    this.router.navigate(['/editar-pagos',id_pago])
  }

  eliminarPago(id_pago:number){
    this.router.navigate(['eliminar-producto',id_pago]);
  }
  GuardarPago(){
    this.enrutador.navigate(['/guardar-pago']);
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
