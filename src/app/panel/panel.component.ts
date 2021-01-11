import { Component, OnInit } from '@angular/core';
import { ejercicio } from '../ejercicio';
import { EjercicioService } from '../ejercicio.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  ejercicios:ejercicio[];

  constructor(private ejercicioService:EjercicioService) {
    console.log(" ---- Componente Panel CREADO ---- ")
   }

  ngOnInit(): void {
    console.log(" ---- Componente Panel[ngOnInit] ---- ")
    this.getEjercicios();
  }

  getEjercicios():void{
    this.ejercicioService.getEjercicios().subscribe(ejercicios=>this.ejercicios=ejercicios.slice(1,5));
  }

}
