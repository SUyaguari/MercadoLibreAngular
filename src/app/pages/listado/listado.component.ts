import { Component, OnInit } from '@angular/core';

import { Contactows } from 'src/app/domain/contactows';
import { ContactowsService } from 'src/app/service/contactows.service';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

contacto: Contactows = new Contactows();

contactos : any;


  constructor(private contactoService: ContactowsService) { }

  ngOnInit(): void {
    this.cargarClientes();

  }


  guardar(){
    
    this.contactoService.save(this.contacto).subscribe(data => {
      console.log(data);

    });
}

cargarClientes(){
  this.contactos = this.contactoService.getClientes();
  
}

}