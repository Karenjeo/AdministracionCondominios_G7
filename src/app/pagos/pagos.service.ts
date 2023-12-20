import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagos } from './pagos';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(private http:HttpClient) { }

  url="http://localhost:8080/api/pagos"
  //metodod paara listar
  public listarPagos():Observable<Pagos[]>{
    return this.http.get<Pagos[]>(this.url+"/listar/todos")
    
  }

  //metodo para insertar
  public guardarPagos(id_residente:number, pagos:Pagos):Observable<Object>{
    return this.http.post(this.url+"/guardar/"+id_residente, pagos);
  }

  //metodo para actualizar
  public updatePagos(id_pago:number, pagos:Pagos):Observable<Object>{
    return this.http.put(this.url+"/editar/"+id_pago, pagos);
  }
  //metodo para eliminar
  eliminarV2(id_pago: number): Observable<void> {
    return this.http.delete<void>(this.url+"/eliminar/"+id_pago);
  }

  obtenerPorId(id_pago:number):Observable<Pagos>{
    return this.http.get<Pagos>(this.url+"/traer/"+id_pago);
  }

  validarCampos(){
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    var apellido = (<HTMLInputElement>document.getElementById("apellido")).value;
    var direccion = (<HTMLInputElement>document.getElementById("direccion")).value;
    var ciudad = (<HTMLInputElement>document.getElementById("ciudad")).value;
    var estado = (<HTMLInputElement>document.getElementById("estado")).value;
    var codigo = (<HTMLInputElement>document.getElementById("codigo")).value;
    var telefono = (<HTMLInputElement>document.getElementById("telefono")).value;
 

    if(nombre == "" || apellido == "" || direccion == "" || ciudad == "" || estado == "" || codigo == "" || telefono == ""){
      alert("Todos los campos son obligatorios");
    }else{
      alert("Compra realizada con exito");
    }
  }


}
