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
    if(this.cont==1){
        this.router.navigate(['principal']);
        this.cont=this.cont+1;
    }
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
}
