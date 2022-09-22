import { Component, Input, OnInit,OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlumnoServiceService } from '../alumno-service.service';
import { Alumnos } from '../Alumnos';

@Component({
  selector: 'app-baja-alumno',
  templateUrl: './baja-alumno.component.html',
  styleUrls: ['./baja-alumno.component.css']
})
export class BajaAlumnoComponent implements OnInit,OnDestroy {

  constructor(private servicio:AlumnoServiceService) { }
  private subscrition = new Subscription();

  @Input() alumno!:Alumnos
  @Output() onEliminado = new EventEmitter();

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscrition.unsubscribe();
  }



  Borrar(id : number){
    this.subscrition.add(
    this.servicio.borrarAlumno(id).subscribe({
      next: () => {this.onEliminado.emit()},
      error: (error => {console.log(error.status)})
    })
    )
  }

}
