import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unidades } from './unidades';
import { Propiedades } from '../propiedades/propiedades';
import { PropiedadesService } from '../propiedades/propiedades.service';

@Injectable({
  providedIn: 'root'
})
export class UnidadesService {
  private apiUrl = "http://localhost:8080/api/unidades"; // Corregir la URL
  private url = "http://localhost:8080/api/propiedades"

  constructor(private http: HttpClient) { }

  guardarUnidadConPropiedad(unidades: Unidades, id_propiedad: number): Observable<Unidades> {
    return this.http.post<Unidades>(`${this.apiUrl}/guardar/${id_propiedad}`, unidades);
  }

  editarUnidad(unidades: Unidades, id_unidad: number): Observable<Unidades> {
    return this.http.put<Unidades>(`${this.apiUrl}/editar/${id_unidad}`, unidades);
  }

  obtenerTodos(): Observable<Unidades[]> {
    return this.http.get<Unidades[]>(`${this.apiUrl}/listar/unidades`);
  }

  eliminar(id_unidad: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id_unidad}`);
  }

  getById(id_unidad: number): Observable<Unidades> {
    return this.http.get<Unidades>(`${this.apiUrl}/listarPorId/${id_unidad}`);
  }

    //metodo para listar
    public listarPropiedades():Observable<Propiedades[]>{
      return this.http.get<Propiedades[]>(this.url+"/traer/todos")
    }
}
