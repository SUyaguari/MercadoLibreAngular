import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formulario } from '../domain/formulario';

@Injectable({
  providedIn: 'root'
})
export class FormularioServiceService {


  constructor(private http: HttpClient) { }

  guardar(formulario: Formulario){
    
    let url = "http://localhost:8080/ProyectoFinalPrueba/ws/cliente/formulario";

    return this.http.post<any>(url, formulario);

  }

}
