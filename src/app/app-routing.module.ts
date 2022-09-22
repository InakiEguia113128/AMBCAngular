import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarAlumnoComponent } from './actualizar-alumno/actualizar-alumno.component';
import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';
import { BajaAlumnoComponent } from './baja-alumno/baja-alumno.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';

const routes: Routes = [
  {path:"alta",component:AltaAlumnoComponent},
  {path:"listado",component:ListaAlumnosComponent},
  {path:"actualizar/:id",component:ActualizarAlumnoComponent},
  {path:"borrar",component:BajaAlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
