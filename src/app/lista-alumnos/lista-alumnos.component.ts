import { Component, OnInit, OnDestroy, Output, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { AlumnoServiceService } from '../alumno-service.service';
import { ActualizarAlumnoComponent } from '../actualizar-alumno/actualizar-alumno.component';
import { Alumnos } from '../Alumnos';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit, OnDestroy {

  constructor(private servicio:AlumnoServiceService, private router:Router) { }

  private subs: Subscription =  new Subscription
  alumnos : any = [];

  @Output() onNueva = new EventEmitter();
  @ViewChild(ActualizarAlumnoComponent) child! : ActualizarAlumnoComponent;
  
  show:boolean = true;

  ngOnInit(): void {
    this.obtenerAlumnos();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  
  obtenerAlumnos(){
    this.subs.add(
      this.servicio.obtenerAlumnos().subscribe({
        next: (resultado => {this.alumnos = resultado}),
        error: (errror => {console.log(errror)})
      })
    )
  }

  alta(){
    this.onNueva.emit();
  }
  
  Actualizar(alumno:Alumnos){
      this.show = false;
      this.child.setup(alumno);
  }

  alumnoAcutualizado(){ debugger;
    this.show = true;
    this.obtenerAlumnos();
  }
}
