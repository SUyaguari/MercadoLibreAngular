import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contactows } from '../domain/contactows';

@Injectable({
  providedIn: 'root'
})
export class ContactowsService {

  constructor(private http: HttpClient) { }

    getClientes() {
      let url = "http://localhost:8080/proyectoFinal/ws/clientes"
      return this.http.get<any>(url);
    }

    save(contacto: Contactows){
      let url = "http://localhost:8080/proyectoFinal/ws/clientes"
      return this.http.post<any>(url, contacto);
    }


    
}
