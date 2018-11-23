import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export class Paciente {

    constructor(rut='', nombre='', apellidoPaterno='', apellidoMaterno='',fechaNacimiento='',direccion=''){
        this.rut = rut;
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.fechaNacimiento = fechaNacimiento;
        this.direccion = direccion;
    }
    _id: string;
    rut: string; 
    nombre: string; 
    apellidoPaterno: string;
    apellidoMaterno: string;
    fechaNacimiento: string;
    direccion: string;
}
