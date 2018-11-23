import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
export class Categorizacion {

    constructor(_id='',_id_pac='',diagnostico='',tipo='',fechaIngreso='',fechaAlta=''){
        
        this.diagnostico = diagnostico;
        this.tipo = tipo;
        this.fechaIngreso = fechaIngreso;
        this.fechaAlta = fechaAlta;
    }
    _id: string;
    _id_pac: string;
    diagnostico :string;
    tipo: string;
    fechaIngreso:string;
    fechaAlta:string;

}
