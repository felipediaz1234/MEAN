import { Component, OnInit, Input } from '@angular/core';
//import { PacienteService } from '../../service/paciente.service';
//import { NgForm } from '@angular/forms';
//import { Paciente } from '../../models/paciente';

import { CategorizacionService } from '../../service/categorizacion.service';
import { PacienteService } from '../../service/paciente.service';
import { NgForm } from '@angular/forms';
import { Categorizacion } from '../../models/categorizacion';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
//import { Paciente } from '../../models/paciente';

declare var M: any;

@Component({
  selector: 'app-categorizacion',
  templateUrl: './categorizacion.component.html',
  styleUrls: ['./categorizacion.component.css']
})
export class CategorizacionComponent implements OnInit {

  constructor(private categorizacionService: CategorizacionService,private _router: Router,
    private _activatedRoute: ActivatedRoute,) { 

      
    }
  //let id=this._activatedRoute.snapshot.params.id;
  //paciente = PacienteService;
  ngOnInit() {
   // this.paciente.g
  }

  addCategorizacion(form : NgForm){

    console.log(form.value);
    if(form.value._id){
      /*this.categorizacionService.putCategorizacion(form.value)
      .subscribe(res=>{
        //this.resetForm(form);
        M.toast({html:'Actualizado Satisfactoriamente'});
        this.getPacientes();
      })*/
    }else{
      this.categorizacionService.postCategorizacion(form.value)
    .subscribe(res=>{
      this.resetForm(form);
      
      M.toast({html:'Guardado Satisfactoriamente'});
      this.getCategorizacion();
    });
    }
    
  }

  getCategorizacion(){
    this.categorizacionService.getCategorizacion()
    .subscribe(res =>{
      this.categorizacionService.categorizacion = res as Categorizacion[];
      console.log(res);
    });
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.categorizacionService.selectCategorizacion= new Categorizacion();

    }
  }

  

}
