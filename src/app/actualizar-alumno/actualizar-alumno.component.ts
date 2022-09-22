import { Component, Input, OnInit, Output,OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';
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


  alumno:Alumnos;
  
  private subscripcion = new Subscription();
  id:number = 0

  constructor(private servicio:AlumnoServiceService,
    private route:Router, private ruta:ActivatedRoute) { 
      this.id = this.ruta.snapshot.params['id'];
      this.alumno =  new Alumnos(0,"","",0)
    }

  ngOnInit(): void {
    this.getAlumno();
  }
  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }

    getAlumno(){
      this.subscripcion.add(
        this.servicio.obtenerAlumno(this.id).subscribe({
          next: (resultado => {this.alumno = resultado}),
          error: (error => {console.log(error.status)})
        })
      )
    }

  actualizarAlumno(){
    this.subscripcion.add(
    this.servicio.actualizarAlumno(this.alumno).subscribe({
      next: (resultado => {console.log(this.alumno), this.route.navigateByUrl("/lista")}),
          error: (error => {console.log(error.status)})
    })
    )
  }
}
