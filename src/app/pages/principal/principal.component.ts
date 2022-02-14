import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { producto } from 'src/app/domain/productos';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  responsiveOptions: any; 
  imagenes: any;
  g:any;
  parametro: any;
  
  vector:producto[]=[];

  constructor(private http: HttpClient, private router: Router) { 

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

    this.g =[{codigo:0, nombre:'Gato', imagen:"assets/Imagenes/hamster.png"},
    {codigo:1, nombre:'Gato2', imagen:'assets/Imagenes/gatito.png'},
    {codigo:2, nombre:'Gato3', imagen:'assets/Imagenes/gato3.png'},
    {codigo:3, nombre:'Gato4', imagen:'assets/Imagenes/gato3.png'},
    {codigo:4, nombre:'Gato5', imagen:'assets/Imagenes/gatito.png'},
    {codigo:5, nombre:'Gato6', imagen:'assets/Imagenes/gato3.png'}
  ]


  }

  comprar(parametro: producto){

    let params: NavigationExtras = {
      queryParams: {
        producto: parametro
      }
    }
    
    this.router.navigate(['compraProducto'], params);

  }

}
