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
  
  c: Contactows = new Contactows();

  constructor(private contactoService: ContactowsService ) { }

  ngOnInit(): void {

  }

  cargarClientes(){
  console.log(this.contactoService.getDatos(this.contacto));

 this.contactoService.getDatos(this.contacto).subscribe(contacto => this.c = contacto);


  // this.c = this.contactoService.getDatos(this.contacto);
   console.log("-------------");
    console.log(this.c);
    console.log("-------------");
   console.log(this.datos.cedula);
   console.log("-------------");
   console.log(this.datos.correo);
   //this.contactos = this.contactoService.getClientes();
   this.contactos = this.contactoService.getDatos;
   console.log(this.contactos);
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
