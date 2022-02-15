import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { autentificacion } from 'src/app/domain/singleton';

@Component({
  selector: 'app-persona-perfil',
  templateUrl: './persona-perfil.component.html',
  styleUrls: ['./persona-perfil.component.scss']
})
export class PersonaPerfilComponent implements OnInit {

  constructor(private router: Router, private aut : autentificacion ) { }

  per : any;

  ngOnInit(): void {
    this.per = this.aut.getUsuario();
  }

  regresar(){

    this.router.navigate(['principal']);

  }

}
