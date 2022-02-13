import { Component, OnInit } from '@angular/core';
import { Formulario } from 'src/app/domain/formulario';
import { FormularioServiceService } from 'src/app/service/formulario-service.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  form: Formulario = new Formulario();
  

  constructor(private formularioServicio: FormularioServiceService) {
    
   }

  ngOnInit(): void {
  }

  guardar(){
    this.formularioServicio.guardar(this.form).subscribe(data => {
      console.log(data);
    });
  }

}
