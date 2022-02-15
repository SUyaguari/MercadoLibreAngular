import { Component, OnInit } from '@angular/core';
import { Contactows } from 'src/app/domain/contactows';
import { Loginws } from 'src/app/domain/login';
import { ContactowsService } from 'src/app/service/contactows.service';


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
  

  constructor(private contactoService: ContactowsService ) { }

  ngOnInit(): void {

   this.cargarClientes();


  }

  cargarClientes(){
    this.contactos = this.contactoService.getClientes();

    console.log(this.contactos);
    console.log("Antes del fort");
    console.log(this.contactoService.getClientes());
    console.log( this.contactos = this.contactoService.getClientes());
   
    console.log(this.datos);

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
