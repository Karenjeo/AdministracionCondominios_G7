import { Component } from '@angular/core';
import { PagosService } from '../pagos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagos } from '../pagos';

@Component({
  selector: 'app-editar-pago',
  templateUrl: './editar-pago.component.html',
  styleUrls: ['./editar-pago.component.css']
})
export class EditarPagoComponent {

  pagos:Pagos = new Pagos();
  id_pago : number;
  constructor(private service:PagosService, private router:Router, private activad:ActivatedRoute){}


  ngOnInit(){
    this.activad.paramMap.subscribe((params)=>{
      const id_pago = params.get('id_pago');
      if(id_pago !==null){
        this.id_pago = +id_pago;

        this.service.obtenerPorId(this.id_pago).subscribe((pago)=>{
          this.pagos = pago;
        })
      }
    })
  }

  //metodo para editar
  actualizar(){
    this.service.updatePagos(this.id_pago, this.pagos).subscribe({
      next:(datos)=>{
        this.irOtroPagina();
      }
    })
  }

  irOtroPagina(){
    this.router.navigate(['/pagos'])
  }

}
