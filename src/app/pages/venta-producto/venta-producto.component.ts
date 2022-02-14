import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-venta-producto',
  templateUrl: './venta-producto.component.html',
  styleUrls: ['./venta-producto.component.scss']
})
export class VentaProductoComponent implements OnInit {

  prod: any;
  cont: number =1;

  constructor(private route: ActivatedRoute, private router: Router) {

    
    this.route.queryParams.subscribe(params =>{
      console.log(params);
    
      if(this.router.getCurrentNavigation()?.extras.queryParams){
        let producto = this.router.getCurrentNavigation()?.extras.queryParams?.producto;
        console.log(producto)
        this.prod=producto;
      }
   })
  }

  ngOnInit(): void {
    console.log("aaaaaa")
    console.log(this.prod);

  }

  sumar(){

    this.cont=this.cont+1;
    console.log(this.cont);

  }

  restar(){

    if(this.cont>1){
      this.cont=this.cont-1;
      console.log(this.cont);
    }
  }

}
