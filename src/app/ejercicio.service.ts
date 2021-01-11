import { Injectable } from '@angular/core';
import { Observable,of } from "rxjs";
import { ejercicio } from './ejercicio';
import { AngularFirestore } from '@angular/fire/firestore';
import { EJERCICIOS } from './collection-ejercicios';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  constructor(private firestore: AngularFirestore) {
  }

  getEjercicios():Observable<ejercicio[]>{

    //return of(EJERCICIOS);

    return this.firestore.collection<ejercicio>('ejercicios').valueChanges();

  }

  getEjercicio(id:number):Observable<ejercicio>{
    console.log("Id solicitado" + id);
    return of(EJERCICIOS.find(ejercicio=>ejercicio.id===id)!);
  }

}
