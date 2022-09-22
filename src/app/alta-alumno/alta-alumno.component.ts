import { Component, OnInit,OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlumnoServiceService } from '../alumno-service.service';
import { Alumnos } from '../Alumnos';

@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.css']
})
export class AltaAlumnoComponent implements OnInit,OnDestroy {

  alumno:Alumnos

  @Output() onAltaAlunno = new EventEmitter();

  constructor(private servicio:AlumnoServiceService) {
    this.alumno = new Alumnos(0,"","",0)
   }

  ngOnInit(): void {
  }

  private subs:Subscription = new Subscription();

  
  ingresarAlumno(){
    this.subs.add(
      this.servicio.altaAlumno(this.alumno).subscribe({
        next: (resultado => {this.onAltaAlunno.emit()}),
        error: (error => {console.log(error)})
      })
    ) 
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  cancelar(){
    this.onAltaAlunno.emit();
  }
}
