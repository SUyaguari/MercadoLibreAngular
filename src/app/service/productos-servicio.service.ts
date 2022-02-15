import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Crearproducto } from '../domain/crearproducto';

@Injectable({
  providedIn: 'root'
})
export class ProductosServicioService {

  constructor(private http: HttpClient) { }

  guardar(prodicto: Crearproducto){
    
    let url = "http://localhost:8080/proyectoFinal/ws/productosRest";
    console.log("super", prodicto);
    return this.http.post<any>(url, prodicto);

  }

  getProducto() {
    let url = "http://localhost:8080/proyectoFinal/ws/productosRest";
    return this.http.get<any>(url);
  }


}
