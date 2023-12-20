import { Component } from '@angular/core';
import { PagosService } from '../pagos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagos } from '../pagos';

@Component({
  selector: 'app-guardar-pago',
  templateUrl: './guardar-pago.component.html',
  styleUrls: ['./guardar-pago.component.css']
})
export class GuardarPagoComponent {

  pagos:Pagos = new Pagos();
  id_residente : number;
  constructor(private service:PagosService, private router:Router, private activad:ActivatedRoute){}


  ngOnInit(){
    this.activad.paramMap.subscribe((params)=>{
      const id_residente = params.get('id_residente');
      if(id_residente !==null){
        this.id_residente = +id_residente
      }
    })
  }

  //metodo para inserta
  public insertar(){
    this.service.guardarPagos(this.id_residente, this.pagos).subscribe({
      next: (datos) =>{
        //ir a otra pagina
        console.log("insertado")
        this.irOtraPagina();
      }
    })
  }

  irOtraPagina(){
    this.router.navigate(['pagos'])
  }


}
