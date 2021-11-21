import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

   url='http://127.0.0.1:3000/'; 

  constructor(private http: HttpClient) { }

  /////////////////////////////////////

  //****OBTENER TODOS*****

  //clientes
  recuperarTodos() {
    return this.http.get(`${this.url}getAll`);
  }
  
  //Libros
  recuperarTodoslibro() {
    return this.http.get(`${this.url}getAll4`);
  }
  
  //Autores
  recuperarTodosautores() {
    return this.http.get(`${this.url}getAll3`);
  }
  //Editoriales
  recuperarTodoseditoriales() {
    return this.http.get(`${this.url}getAll2`);
  }
/////////////////////////////////////

  //*********INSERTAR***********

  //clientes
  alta(contacto:any):Observable<any> {
    return this.http.post(`${this.url}add_contact`, contacto);    
  }
  //libros
  altalibro(contacto:any):Observable<any> {
    return this.http.post(`${this.url}add_contact4`, contacto);    
  }
  //autores
  altaautores(contacto:any):Observable<any> {
    return this.http.post(`${this.url}add_contact3`, contacto);    
  }
   //Editoriales
   altaeditorial(biblioteca:any):Observable<any> {
    return this.http.post(`${this.url}add_contact2`, biblioteca);    
  }
////////////////////////////////////
 
  //*******ELIMINAR*******

  //clientes
  baja(codigo:number) {
    return this.http.delete(`${this.url}delete/${codigo}`);
  }
  //libros
  bajalibro(codigo:number) {
    return this.http.delete(`${this.url}delete4/${codigo}`);
  }
  //autores
  bajaa(codigo:number) {
    return this.http.delete(`${this.url}delete3/${codigo}`);
  }
  //Editorial
  bajaeditorial(codigo:number) {
    return this.http.delete(`${this.url}delete2/${codigo}`);
  }



  ///////////////////////////////////////

  //**********EDITAR************

  //Clientes
  modificacion(contacto:any, id:number) {
    return this.http.put(`${this.url}/update/`+id, contacto);
    } 
  //Autores
  modificacionautores(contacto:any, IdAutores:number) {
    return this.http.put(`${this.url}/update3/`+IdAutores, contacto);    
  }
  //Libros
  modificacionlibro(contacto:any, Idlibro:number) {
  return this.http.put(`${this.url}/update4/`+Idlibro, contacto);
  } 
  //Editorial
  modificacioneditorial(biblioteca:any, IdEditorial:number) {
  return this.http.put(`${this.url}/update2/`+IdEditorial, biblioteca);
  } 
  

}
