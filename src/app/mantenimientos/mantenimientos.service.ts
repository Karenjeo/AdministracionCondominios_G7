import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mantenimientos } from './mantenimientos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MantenimientosService {

  constructor(private http:HttpClient) { }

  url="http://localhost:8080/api/mantenimiento"

  //manteniemto para listar
  listarMantenimiento():Observable<Mantenimientos[]>{
    return this.http.get<Mantenimientos[]>(this.url+"/listar/todos")
  }

  //guardarMantimientoConidPropiedad:
  guardarMan(id_propiedad:number, mant:Mantenimientos):Observable<Object>{
    return this.http.post(this.url+"/guardar/"+id_propiedad,mant);
  }

  editarMan(id_mantenimiento:number, mant:Mantenimientos):Observable<Object>{
    return this.http.put(this.url+"/editar/"+id_mantenimiento,mant);
  }

  eliminar(id_mantenimiento:number){
    this.http.delete(this.url+"/eliminar/"+id_mantenimiento)
  }

  obtenerPorId(id_mantenimiento:number):Observable<Mantenimientos>{
    return this.http.get<Mantenimientos>(this.url+"/traerPorId/"+id_mantenimiento);
  }

  eliminarV2(id_mantenimiento: number): Observable<void> {
    return this.http.delete<void>(this.url+"/eliminar/"+id_mantenimiento);
  }

}
