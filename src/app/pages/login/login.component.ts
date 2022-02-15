import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contactows } from 'src/app/domain/contactows';
import { Loginws } from 'src/app/domain/login';
import { autentificacion } from 'src/app/domain/singleton';
import { ContactowsService } from 'src/app/service/contactows.service';
import { PrincipalComponent } from '../principal/principal.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  contacto: Contactows = new Contactows();

  datos : Loginws = new Loginws();

  //contactos : Contactows[]=[];

  contactos : any;
  
  c: any;

  constructor(private contactoService: ContactowsService, private roueter: Router, private aut : autentificacion) { }

  ngOnInit(): void {

  }

  cargarClientes(){
  console.log(this.contactoService.getDatos(this.contacto));

  this.contactoService.getDatos(this.contacto).subscribe((res: any[]) => this.c = res);



  // this.c = this.contactoService.getDatos(this.contacto);
   console.log("-------------");
    console.log(this.c);
    console.log("-------------");

   //this.contactos = this.contactoService.getClientes();
    if(this.c!=null){
      //this.pantallaPrincipal.colocarUser(this.c);
      this.aut.setUsuario(this.c);
      this.roueter.navigate(['principal']);
      
    }
   
  // console.log(this.contactos);
    /*
/*
    this.contactos = this.contactoService.getClientes();

    this.contactos.forEach(function(value) {
  
    console.log("Antes del fort");
    console.log(this.contactoService.getClientes());
    }

    console.log("Antes del fort");
    console.log(this.contactoService.getClientes());
    console.log( this.contactos = this.contactoService.getClientes());
    console.log(this.contacto);

    for (let i = 0; i < this.contactoService.getClientes.length; i++) {
      console.log("Entro al puto form"+i);
      if (correo == (this.contactoService.getClientes.name)){
        console.log("Entro al primer IF");
        if (cedula == this.contactos.get(i).cedula){
    
          console.log("INICIO CESION");
    
        }else{
          console.log("no se pudo cedula");
        }
      }else{
        console.log("no pudo por el correo");
      }
     
    
  

*/
  }
}
