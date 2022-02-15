import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { autentificacion } from 'src/app/domain/singleton';
import { ventas } from 'src/app/domain/ventas';
import { VentasServiceService } from 'src/app/service/ventas-service.service';

@Component({
  selector: 'app-venta-producto',
  templateUrl: './venta-producto.component.html',
  styleUrls: ['./venta-producto.component.scss']
})
export class VentaProductoComponent implements OnInit {

  prod: any;
  cont: number =1;
  total: number = 0 ;
  p: number = 0;
  v: ventas = new ventas();
  per: any;

  constructor(private route: ActivatedRoute, private router: Router, private servicioVentas: VentasServiceService, private aut: autentificacion) {

    
    this.route.queryParams.subscribe(params =>{
      console.log(params);
    
      if(this.router.getCurrentNavigation()?.extras.queryParams){
        let producto = this.router.getCurrentNavigation()?.extras.queryParams?.producto;
        console.log(producto)
        this.prod=producto;
        this.total=parseFloat(producto.precio);
        this.p = parseFloat(producto.precio);
      }
   })
  }

  ngOnInit(): void {
    console.log(this.prod);
    this.per = this.aut.getUsuario();
  }

  sumar(){

    this.cont=this.cont+1;
    this.total = this.p * this.cont;

  }

  restar(){

    if(this.cont>1){
      this.cont=this.cont-1;
      this.total = this.p * this.cont;
    }
  }

  usuario(parametro : string){

    let params: NavigationExtras = {
      queryParams: {
        string: parametro
      }
    }
    
    this.router.navigate(['perfil'], params);

  }

  guardar(){
    if(this.per!=null){
      this.v.codigo=0;
      this.v.codigoProducto=this.prod.codigo;
      this.v.cantidad = this.cont;
      this.v.total = this.total;
      this.v.comprador =this.per.cedula;
      this.v.vendedor ='000000000';
      this.servicioVentas.guardar(this.v).subscribe(data => {
        console.log(data);
      });
      this.router.navigate(['principal']);
    }else{
      this.router.navigate(['login'])
    }
  }

}
