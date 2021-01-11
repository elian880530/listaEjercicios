import { Component, OnInit } from '@angular/core';
import { EJERCICIOS } from '../collection-ejercicios';
//Comento esta importacion ya que el ejercicio.service.ts se encarga de inyectar las dependencias necesarias.
import { ejercicio } from '../ejercicio';
import { EjercicioService } from '../ejercicio.service';


@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  //Ejemplo estático de declaración de objeto creando sus atributos
  /*
  ejercicio: ejercicio={
    id:1,
    name:"Flexiones"
  };
  */

  //Ejemplo dinámico de declaración de objeto importando sus atributos
  //ejercicios=EJERCICIOS;
  ejercicios:ejercicio[];
  ejercicioSeleccionado:ejercicio;

  constructor(private ejercicioService:EjercicioService) {
    console.log(" ---- Componente Ejercicios CREADO ---- ")
  }

  /*
  getEjercicios_old():void{
    this.getEjercicios=this.ejercicioService.getEjercicios();
  }
  */

  getEjercicios():void{
    this.ejercicioService.getEjercicios().subscribe(ejercicios=>this.ejercicios=ejercicios);
  }

  ngOnInit(): void {
    console.log(" ---- Componente Ejercicios[ngOnInit] ---- ")
    this.getEjercicios();
  }

  //Se declara la función onSelectEjercicio() que se llama desde la vista
  onSelectEjercicio(ejercicio:ejercicio):void{
    console.log("Ejercicio seleccionado=" + ejercicio.id);
    this.ejercicioSeleccionado=ejercicio;
  }

}
