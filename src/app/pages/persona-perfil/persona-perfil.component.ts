import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { autentificacion } from 'src/app/domain/singleton';

@Component({
  selector: 'app-persona-perfil',
  templateUrl: './persona-perfil.component.html',
  styleUrls: ['./persona-perfil.component.scss']
})
export class PersonaPerfilComponent implements OnInit {

  per : any;

  constructor(private router: Router, private aut : autentificacion, private route: ActivatedRoute,  ) { 

    this.route.queryParams.subscribe(params =>{
      console.log(params);
    
      if(this.router.getCurrentNavigation()?.extras.queryParams){
        let usu = this.router.getCurrentNavigation()?.extras.queryParams?.producto;
        console.log(usu)
        
      }
    })
  }

  

  ngOnInit(): void {
    this.per = this.aut.getUsuario();


  }

  regresar(){

    this.router.navigate(['principal']);

  }

}
