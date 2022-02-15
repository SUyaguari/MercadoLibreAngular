import { Component, OnInit } from '@angular/core';
import { ImagenFirestoreService } from 'src/app/service/imagen-firestore.service';
import firebase from 'firebase/compat/app' ;
import "firebase/compat/storage";
import "firebase/compat/firestore" ;
import { Router } from '@angular/router';
import { Crearproducto } from 'src/app/domain/crearproducto';
import { ProductosServicioService } from 'src/app/service/productos-servicio.service';
import { PrincipalComponent } from '../principal/principal.component';



@Component({
  selector: 'app-registarproducto',
  templateUrl: './registarproducto.component.html',
  styleUrls: ['./registarproducto.component.scss']
})
export class RegistarproductoComponent implements OnInit {

  form: Crearproducto = new Crearproducto();

  enlace: any;

  constructor(private imagenService: ImagenFirestoreService, private route: Router,
              private servicioProducto: ProductosServicioService) { }

  ngOnInit(): void {
    
  }

 subir(enlace: string) { 
    console.log("archivo",enlace," guardado")
 this.form.photo=enlace;
 console.log("archivo: ",this.form.photo, "esta guardado en la base");
}


public cambioArchivo = async(event:any)=> {
  const archivo = event.target.files[0];
  const storageRef = firebase.storage().ref();
const archivoPath = storageRef.child(archivo.name);
 await archivoPath.put(archivo);
 console.log("archivo cargado ", archivo.name);
  this.enlace = await archivoPath.getDownloadURL(); 
  this.form.photo=this.enlace;
  console.log(this.enlace) 
  this.subir(this.enlace);
}

guardar(){
  console.log("Hola", this.form);
  //this.imagenService.save(this.galeria);
  console.log(this.form)
  console.log("ya")
  console.log(this.servicioProducto.guardar(this.form));
  
  this.servicioProducto.guardar(this.form).subscribe(data =>{
    console.log(data)
  })

  this.route.navigate(['principal']);

}


}
