import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../service/usuarios.service';
import { NgForm } from '@angular/forms';
import { Usuarios } from '../../models/usuarios';

declare var M: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  addUsuario(form : NgForm){

    console.log(form.value);
    if(form.value._id){
      this.usuariosService.putUsuario(form.value)
      .subscribe(res=>{
        //this.resetForm(form);
        M.toast({html:'Actualizado Satisfactoriamente'});
        this.getUsuarios();
      })
    }else{
      this.usuariosService.postUsuario(form.value)
    .subscribe(res=>{
    this.resetForm(form);
      
      M.toast({html:'Guardado Satisfactoriamente'});
      this.getUsuarios();
    });
    }
    
  }

  getUsuarios(){
    this.usuariosService.getUsuario()
    .subscribe(res =>{
      this.usuariosService.usuario = res as Usuarios[];
      console.log(res);
    });
  }

  deleteUsuario(_id: string){
    console.log(_id);
    if(confirm('Estas seguro')){
      this.usuariosService.deleteUsuario(_id)
    .subscribe(res=>{
      
      this.getUsuarios();
    });
    }
    
  }

  editUsuario(usuario: Usuarios){
      console.log(usuario);
    this.usuariosService.selectUsuario = usuario;

  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.usuariosService.selectUsuario= new Usuarios();

    }
  }
}
