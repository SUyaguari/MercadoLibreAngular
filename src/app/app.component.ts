import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { autentificacion } from './domain/singleton';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MercadoLibre';
  a: number = 1;
  cont: number =1;
  usu: any;
  constructor(public translate: TranslateService, private router: Router,private aut: autentificacion){
    this.translate.addLangs(['en','es']);
    this.translate.setDefaultLang('es');
    this.usu = this.aut.getUsuario();
  }

  cambiar(){

    if(this.a==1){
      this.translate.setDefaultLang('en');
      this.a=2;
    }else{
      this.translate.setDefaultLang('es')
      this.a=1;
    }
    this.usu = this.aut.getUsuario();
  }

  sesion(){
    this.usu = this.aut.getUsuario();
    this.router.navigate(['login']);
  }

  casa(){
    this.usu = this.aut.getUsuario();
    this.router.navigate(['principal']);
  }

  formulario(){
    this.usu = this.aut.getUsuario();
    this.router.navigate(['formulario']);
  }

  pred(){
    if(this.usu!=null){
      this.router.navigate(['crearProducto'])
    }else{
      this.router.navigate(['login'])
    }
    this.usu = this.aut.getUsuario();
  }
}
