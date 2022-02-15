import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ventas } from '../domain/ventas';

@Injectable({
  providedIn: 'root'
})
export class VentasServiceService {

  constructor(private http: HttpClient) { }

  guardar(venta : ventas){
    
    let url = "http://localhost:8080/proyectoFinal/ws/clientes/venta";
    console.log(venta);
    return this.http.post<any>(url, venta);

  }

  getVenta() {
    let url = "http://localhost:8080/proyectoFinal/ws/clientes/ventaL";
    return this.http.get<any>(url);
  }
  
}
