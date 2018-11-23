import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  

  selectUsuario: Usuarios;
  usuario: Usuarios[];
  readonly URL_API ='https://quiet-ocean-84575.herokuapp.com/v1/usuarios';


  constructor(private http: HttpClient) { 
    this.selectUsuario = new Usuarios;
  }

  getUsuario(){
    return this.http.get(this.URL_API);
      
  }

  postUsuario(usuario: Usuarios){
    return this.http.post(this.URL_API, usuario);
  }

  putUsuario(usuario: Usuarios){
    return this.http.put(this.URL_API + `/${usuario._id}`,usuario);
  }

  deleteUsuario(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
