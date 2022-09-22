import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlumnoServiceService } from './alumno-service.service';
import { BajaAlumnoComponent } from './baja-alumno/baja-alumno.component';
import { ActualizarAlumnoComponent } from './actualizar-alumno/actualizar-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaAlumnoComponent,
    ListaAlumnosComponent,
    BajaAlumnoComponent,
    ActualizarAlumnoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AlumnoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
