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
  g:any;
  
  
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

    this.g =[{codigo:0, nombre:'Gato', precio:'1.20', descripcion: 'wuehfiwehfw', cantidad:'199', photo:"assets/Imagenes/hamster.png"},
    {codigo:1, nombre:'Gato1', precio:'1.201', descripcion: 'wuehfiwehfw1', cantidad:'1991', photo:"assets/Imagenes/gatito.png"},
    {codigo:2, nombre:'Gato2', precio:'1.202', descripcion: 'wuehfiwehfw2', cantidad:'1992', photo:"assets/Imagenes/hamster.png"},
    {codigo:3, nombre:'Gato3', precio:'1.203', descripcion: 'wuehfiwehfw3', cantidad:'1993', photo:"assets/Imagenes/gato3.png"},
    {codigo:4, nombre:'Gato4', precio:'1.204', descripcion: 'wuehfiwehfw4', cantidad:'1994', photo:"assets/Imagenes/gatito.png"},
    {codigo:5, nombre:'Gato5', precio:'1.205', descripcion: 'wuehfiwehfw5', cantidad:'1995', photo:"assets/Imagenes/gato3.png"}
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
