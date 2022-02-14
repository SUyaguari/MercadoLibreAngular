import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formulario } from '../domain/formulario';

@Injectable({
  providedIn: 'root'
})
export class FormularioServiceService {


  constructor(private http: HttpClient) { }

  guardar(formulario: Formulario){
    
    let url = "http://localhost:8080/proyectoFinal/ws/clientes/formulario";

    return this.http.post<any>(url, formulario);

  }

  getFormularios() {
    let url = "http://localhost:8080/proyectoFinal/ws/clientes/formularioL";
    console.log("holi")
    return this.http.get<any>(url);
  }

}
