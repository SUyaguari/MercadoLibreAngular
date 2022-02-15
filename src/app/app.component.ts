import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MercadoLibre';
  a: number = 1;
  cont: number =1;
  constructor(public translate: TranslateService, private router: Router){
    this.translate.addLangs(['en','es']);
    this.translate.setDefaultLang('es');
    
  }

  cambiar(){

    if(this.a==1){
      this.translate.setDefaultLang('en');
      this.a=2;
    }else{
      this.translate.setDefaultLang('es')
      this.a=1;
    }
  }

  sesion(){
    this.router.navigate(['login']);
  }

  casa(){
    this.router.navigate(['principal']);
  }

  formulario(){
    this.router.navigate(['formulario']);
  }
}
