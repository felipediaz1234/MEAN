import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
export class Usuarios {

    constructor(estado=true, nombre='', password='', email=''){
        this.estado= estado;
        this.nombre= name;
        this.password = password;
        this.email = email;
    }
    estado: boolean;
    _id: string;
    nombre: string;
    password: string;
    email: string;

}


