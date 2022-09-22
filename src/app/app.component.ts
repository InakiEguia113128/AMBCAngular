import { Component } from '@angular/core';
import { AlumnoServiceService } from './alumno-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'P1';
  mostrar:boolean =false;


  constructor(private servicio:AlumnoServiceService){

  }

  mostrarAlta(){
    this.mostrar = true;
  }

  ocultar(){
    this.mostrar = false;
  }
}
