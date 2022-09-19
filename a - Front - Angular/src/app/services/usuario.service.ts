import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url="http://localhost:8080/agregar";


  constructor(private http:HttpClient) { }


  onCrearRegistro(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url, usuario);
  }

  ObtenerUsuario(mail:string |null )
  {
    return this.http.get<any>(this.url+"?mail="+mail);
  }



}

export class Usuario
{
  nombre:string="";
  apellido:string="";
  email:string="";
  password:string="";
  telefono:string="";
  dni:string="";

}

export class  LoginRequest {
  email:string="";
  password:string="";
  Token?: any = "";
  
}
