import { Component, OnInit } from '@angular/core';
import { FormularioServiceService } from 'src/app/service/formulario-service.service';

@Component({
  selector: 'app-formularios-listar',
  templateUrl: './formularios-listar.component.html',
  styleUrls: ['./formularios-listar.component.scss']
})
export class FormulariosListarComponent implements OnInit {

  formularios: any;

  constructor(private formularioServicio: FormularioServiceService) { }

  ngOnInit(): void {
    this.cargarFormularios();
  }

  cargarFormularios(){

    this.formularios = this.formularioServicio.getFormularios();
    

  }

}
