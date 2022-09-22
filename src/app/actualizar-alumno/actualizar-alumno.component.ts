import { Component, Input, OnInit, Output,OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlumnoServiceService } from '../alumno-service.service';
import { Alumnos } from '../Alumnos';

@Component({
  selector: 'app-actualizar-alumno',
  templateUrl: './actualizar-alumno.component.html',
  styleUrls: ['./actualizar-alumno.component.css']
})
export class ActualizarAlumnoComponent implements OnInit,OnDestroy {


  alumno!:Alumnos;
  
  private subscripcion = new Subscription();
  @Output() onActualizar = new EventEmitter();


  constructor(private servicio:AlumnoServiceService) { 
      this.alumno = new Alumnos(0,"","",0);
  
    }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }


    actualizarAlumno(){
      this.subscripcion.add(
      this.servicio.actualizarAlumno(this.alumno).subscribe({
        next: (resultado) => {this.onActualizar.emit()},
        error: (error) => {console.log(error.status)}
      })
      )
    }

  setup(alumno:Alumnos):void{
      Object.assign(this.alumno,alumno);
      console.log(alumno)
  }
}
