import { Component, Input, OnInit } from '@angular/core';
import { ejercicio } from '../ejercicio';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { EjercicioService } from '../ejercicio.service';

@Component({
  selector: 'app-ejercicio-detalle',
  templateUrl: './ejercicio-detalle.component.html',
  styleUrls: ['./ejercicio-detalle.component.css']
})
export class EjercicioDetalleComponent implements OnInit {

  //@Input() ejercicio:ejercicio;
  ejercicio:ejercicio;

  constructor(
    private route:ActivatedRoute,
    private ejercicioService:EjercicioService,
    private location:Location
    ) { }

  ngOnInit(): void {
    this.getEjercicio();
  }

  getEjercicio(): void {
    const id=+this.route.snapshot.paramMap.get('id')!;
    this.ejercicioService.getEjercicio(id).subscribe(ejercicio=>this.ejercicio=ejercicio);
    //debugger;
  }

goBack():void{
  this.location.back();
}


}
