import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Connections } from './ConnectionService';
import { Observable } from 'rxjs';
import { DepartamentoModel } from '../Models/Departamento.Model';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  private headers = new HttpHeaders({
    'Content-type': 'application/json'      
});


  constructor(private http:HttpClient,
              private conn:Connections) { }

  obtenerTodos():Observable<any>{
    return this.http.get(this.conn.urlDepartamento + 'ObtenerTodos');
  }

  obtenerPorId(id:string):Observable<any>
  {
    return this.http.get(this.conn.urlDepartamento + 'ObtenerPorId?id=' + id);
  }

  crear(modelo:DepartamentoModel):Observable<any>
  {
    return this.http.post(this.conn.urlDepartamento + 'Crear',JSON.stringify(modelo),{headers: this.headers});
  }

  actualizar(modelo:DepartamentoModel): Observable<any>
  {
    return this.http.put(this.conn.urlDepartamento + 'Actualizar',JSON.stringify(modelo),{headers: this.headers});
  }

  eliminar(id:string):Observable<any>
  {
    return this.http.delete(this.conn.urlDepartamento + 'Eliminar?id=' + id);
  }

}
