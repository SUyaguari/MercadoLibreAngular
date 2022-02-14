import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { crearproducto } from '../domain/crearproducto';


@Injectable({
  providedIn: 'root'
})
export class ImagenFirestoreService {

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { 

  }

  save(imagen: crearproducto){
    const refImagen = this.afs.collection("baseGaleria");

    console.log("guardado", imagen);

   


    //refImagen.doc(imagen.id).set(Object.assign({},imagen));
    refImagen.add(Object.assign({},imagen));

  }

  getContactos(): Observable<any[]>{
    const refContactos = this.afs.collection("baseGaleria");
    return refContactos.valueChanges()
  }
}