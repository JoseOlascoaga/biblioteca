import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formularioautores.component.html',
  styleUrls: ['./formularioautores.component.css']
})
export class FormularioautoresComponent implements OnInit {

  myform:FormGroup  
  id_editar:number=0;
  constructor(private _builder:FormBuilder,private contacto: ContactoService) { 
    this.myform=this._builder.group({
      codautor: ['', [Validators.required]] ,
      nombre: ['', [Validators.required, Validators.maxLength(50)]]  ,
      apellido: ['', [Validators.required, Validators.maxLength(50)]] ,
      nacionalidad: ['', [Validators.required, Validators.maxLength(50)]]  
    })
  }
  lista_contactos: any;
  nuevocon={
    codautor:null,
    nombre:null,
    apellido:null,
    nacionalidad:null
  }
 

  ngOnInit() {
    this.recuperarTodosautores(); 
  }


  recuperarTodosautores(){
  this.contacto.recuperarTodosautores().subscribe(result => this.lista_contactos = result);
  }


  altaautores(value:any) {
    this.nuevocon={
      codautor:value.codautor,
      nombre:value.nombre,
      apellido:value.apellido,
      nacionalidad:value.nacionalidad
    }
    this.contacto.altaautores(this.nuevocon).subscribe(datos => {
      console.log(datos)
      alert("Autor agregado ")
      this.myform.reset()
      this.recuperarTodosautores()
     });
  }

  bajaa(IdAutores:number) {
    if (window.confirm("Esta seguro de eliminar el autor Numero "+IdAutores+" ?")) {
      this.contacto.bajaa(IdAutores).subscribe(datos => {
        console.log(datos)
        alert("Autor eliminado ")
        this.myform.reset()
        this.recuperarTodosautores()
      });
    }

   
  }

  modificacionautores(value:any) {
    this.nuevocon={
      codautor:value.codautor,
      nombre:value.nombre,
      apellido:value.apellido,
      nacionalidad:value.nacionalidad
    }
    this.contacto.modificacionautores(this.nuevocon,this.id_editar).subscribe(datos => {
      console.log(datos)
      alert("Autor editado ")
      this.myform.reset()
      this.recuperarTodosautores()
    });    
  }
  
  seleccionar(con_edi:any) {
   this.id_editar=con_edi['IdAutores'];
   this.myform.setValue({
   codautor:con_edi['codautor'],
   nombre:con_edi['nombre'],
   apellido:con_edi['apellido'],
   nacionalidad:con_edi['nacionalidad']
  })
  }
}