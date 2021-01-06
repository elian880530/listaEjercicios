import { Component, OnInit } from '@angular/core';
import { ejercicio } from '../ejercicio';
import { EJERCICIOS } from '../collection-ejercicios';

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
  ejercicios=EJERCICIOS;
  ejercicioSeleccionado:ejercicio={
    id:0,
    name:'Valor por Defecto'
  };

  constructor() { }

  ngOnInit(): void {
  }

  //Se declara la función onSelectEjercicio() que se llama desde la vista
  onSelectEjercicio(ejercicio:ejercicio):void{
    console.log("Ejercicio seleccionado=" + ejercicio.id);
    this.ejercicioSeleccionado=ejercicio;
  }

}
