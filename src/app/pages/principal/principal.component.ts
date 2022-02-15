import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contactows } from 'src/app/domain/contactows';
import { producto } from 'src/app/domain/productos';
import { ProductosServicioService } from 'src/app/service/productos-servicio.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  responsiveOptions: any; 
  g:any;
  
  vector:producto[]=[];

  user: any;
  constructor(private http: HttpClient, private router: Router, private productoService: ProductosServicioService) { 

      this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    this.vector = [];
  }

  ngOnInit(): void {

    this.llenar()


  }

  comprar(parametro: producto){

    let params: NavigationExtras = {
      queryParams: {
        producto: parametro
      }
    }
    this.llenar()
    
    this.router.navigate(['compraProducto'], params);

  }

  llenar(){

    this.productoService.getProducto().subscribe((res: any[]) => this.g = res);

  }

  colocarUser(u: Contactows){
    this.user = u;
  }

}
