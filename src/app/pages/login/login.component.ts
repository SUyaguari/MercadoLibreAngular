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

 this.contactoService.getDatos(this.contacto).subscribe({next: contacto => this.c.cedula = contacto.cedula,
  error: err => console.error(err),
  complete: () => console.info('Listo')});


  // this.c = this.contactoService.getDatos(this.contacto);
   console.log("-------------");
    console.log(this.c.cedula);
    console.log("-------------");

   //this.contactos = this.contactoService.getClientes();
   console.log("tuptamadre")
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
