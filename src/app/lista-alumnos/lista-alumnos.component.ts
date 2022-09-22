import { Component, OnInit, OnDestroy, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { AlumnoServiceService } from '../alumno-service.service';

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
  

  Actualizar(id:number){
      this.router.navigateByUrl("/actualizar/"+id)
  }

}
