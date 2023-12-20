import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Residentes } from './residentes';
import { Unidades } from '../unidades/unidades';

@Injectable({
  providedIn: 'root'
})
export class ResidentesService {
  private apiUrl = "http://localhost:8080/api/residente"
  private url = "http://localhost:8080/api/unidades"; // Corregir la URL

  constructor(private http: HttpClient) { }

  guardarResidenteConUnidades(residentes: Residentes, id_unidad: number): Observable<Residentes> {
    return this.http.post<Residentes>(`${this.apiUrl}/guardar/${id_unidad}`, residentes);
  }

  editarResidentes(residentes: Residentes, id_residente: number): Observable<Residentes> {
    return this.http.put<Residentes>(`${this.apiUrl}/editar/${id_residente}`, residentes);
  }

  obtenerTodos(): Observable<Residentes[]> {
    return this.http.get<Residentes[]>(`${this.apiUrl}/listar`);
  }

  eliminarResidente(id_residente: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id_residente}`);
  }

  getById(id_residente: number): Observable<Residentes> {
    return this.http.get<Residentes>(`${this.apiUrl}/listar/${id_residente}`);
  }

  obtenerTodosUnidades(): Observable<Unidades[]> {
    return this.http.get<Unidades[]>(`${this.url}/listar/unidades`);
  }
}
