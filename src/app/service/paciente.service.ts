import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  selectPaciente: Paciente;
  paciente: Paciente[];
  readonly URL_API ='https://quiet-ocean-84575.herokuapp.com/v1/pacientes';


  constructor(private http: HttpClient) { 
    this.selectPaciente = new Paciente;
  }

  getPaciente(){
    
    return this.http.get(this.URL_API);
      
  }

  postPaciente(paciente: Paciente){
    return this.http.post(this.URL_API, paciente);
  }

  putPaciente(paciente: Paciente){
    return this.http.put(this.URL_API + `/${paciente._id}`,paciente);
  }

  deletePaciente(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`)
  }
}
