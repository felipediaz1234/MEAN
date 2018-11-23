import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorizacion } from '../models/categorizacion';


@Injectable({
  providedIn: 'root'
})
export class CategorizacionService {

  selectCategorizacion: Categorizacion;
  categorizacion: Categorizacion[];
  readonly URL_API ='https://quiet-ocean-84575.herokuapp.com/v1/categorizacion';

  constructor(private http: HttpClient) { }

  getCategorizacion(){
    return this.http.get(this.URL_API);
  }

  postCategorizacion(categorizacion : Categorizacion){
    return this.http.post(this.URL_API, categorizacion);
  }

  putCategorizacion(categorizacion: Categorizacion){
   // return this.http.put(this.URL_API,`/${categorizacion._id}`,categorizacion);
   return '[{status:true}]';
  }

  deleteCategorizacion(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
