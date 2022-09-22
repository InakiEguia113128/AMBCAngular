import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumnos } from './Alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnoServiceService {

  constructor(private http:HttpClient) { }
  private url = "https://632c4ebd1aabd8373998c4f7.mockapi.io/alumnos";

  obtenerAlumnos():Observable<any>{
    return this.http.get(this.url);
  }

  altaAlumno(alumno:Alumnos):Observable<any>{
    return this.http.post(this.url,alumno);

  }

  actualizarAlumno(alumno:Alumnos):Observable<any>{
    return this.http.put(this.url+"/"+alumno.id,alumno);

  }

  obtenerAlumno(id:number):Observable<any>{
    return this.http.get(this.url+'/'+id);
  }

  borrarAlumno(id:number):Observable<any>{
    return this.http.delete(this.url+"/"+id)
  }
}
