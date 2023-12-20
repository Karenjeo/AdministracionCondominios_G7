import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Propiedades } from './propiedades';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8080/api/propiedades"

  //metodo para listar
  public listarPropiedades():Observable<Propiedades[]>{
    return this.http.get<Propiedades[]>(this.url+"/traer/todos")
  }

  //metood para guardar una propiedad
  public guardarPropiedad(propiedades:Propiedades):Observable<Object>{
    return this.http.post(this.url+"/guardar",propiedades);
  }

  //metodd para actualziar
  public actualizarPropiedad(id_propiedad:number, propieaddes:Propiedades):Observable<Object>{
    return this.http.put(this.url+"/editar/"+id_propiedad,propieaddes)
  }

  //metodo para eliminar
  public eliminarPropiedad(id_propiedad:number):Observable<Object>{
    return this.http.delete(this.url+"/eliminar/"+id_propiedad);
  }

  //metodo para traerPorId;
  obtenerPropiedadPorId(id_propiedad: number): Observable<Propiedades> {
    return this.http.get<Propiedades>(this.url+"/traerPorId/"+id_propiedad);
  }

  eliminarV2(id_propiedad: number): Observable<void> {
    return this.http.delete<void>(this.url+"/editar/"+id_propiedad);
  }

}
