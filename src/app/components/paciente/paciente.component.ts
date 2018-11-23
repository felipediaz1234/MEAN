import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../service/paciente.service';
import { NgForm } from '@angular/forms';
import { Paciente } from '../../models/paciente';

declare var M: any;

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
    this.getPacientes();
  }

  addPaciente(form : NgForm){

    console.log(form.value);
    if(form.value._id){
      this.pacienteService.putPaciente(form.value)
      .subscribe(res=>{
        this.resetForm(form);
        M.toast({html:'Actualizado Satisfactoriamente'});
        this.getPacientes();
      })
    }else{
      this.pacienteService.postPaciente(form.value)
    .subscribe(res=>{
      this.resetForm(form);
      
      M.toast({html:'Guardado Satisfactoriamente'});
      this.getPacientes();
    });
    }
    
  }

  getPacientes(){
    this.pacienteService.getPaciente()
    .subscribe(res =>{
      console.log(res);
      this.pacienteService.paciente = res as Paciente[];
      
    });
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.pacienteService.selectPaciente= new Paciente();

    }
  }

  mostrarCategorizacion(_id:string){

    console.log(_id);
    this

  }

  deletePaciente(_id: string){
    console.log(_id);
    if(confirm('Estas seguro')){
      this.pacienteService.deletePaciente(_id)
    .subscribe(res=>{
      
      this.getPacientes();
    });
    }
    
  }

  editPaciente(paciente: Paciente){
      console.log(paciente);
    this.pacienteService.selectPaciente = paciente;

  }

}
