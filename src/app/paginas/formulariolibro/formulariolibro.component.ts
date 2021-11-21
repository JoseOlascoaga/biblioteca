import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulariolibro.component.html',
  styleUrls: ['./formulariolibro.component.css']
})
export class FormulariolibroComponent implements OnInit {

  myform:FormGroup  
  id_editar:number=0;
  constructor(private _builder:FormBuilder,private contacto: ContactoService,) { 
    this.myform=this._builder.group({
      codlibro: ['', [Validators.required]]  ,
      nombrelibro: ['', [Validators.required, Validators.maxLength(50)]]  ,
      Idautor: ['', [Validators.required]]  ,
      Ideditorial: ['', [Validators.required]]  ,
      FechaLanzamiento: ['', [Validators.required]] ,
    })
  }
  lista_contactos: any;
  lista_autores: any;
  lista_editoriales: any;

  nuevocon={
    codlibro:null,
    nombrelibro:null,
    Idautor:null,
    Ideditorial:null,
    FechaLanzamiento:null
  }
 

  ngOnInit() {
    this.recuperarTodoslibros();
    this.recuperarTodosautores();
    this.recuperarTodoseditoriales();
  }


  recuperarTodoslibros(){
  this.contacto.recuperarTodoslibro().subscribe(result => this.lista_contactos = result);
  }

  recuperarTodoseditoriales() {
    this.contacto.recuperarTodoseditoriales().subscribe(result => this.lista_editoriales = result);
  }

  recuperarTodosautores() {
    this.contacto.recuperarTodosautores().subscribe(result => this.lista_autores = result);
  }
  

  altalibro(value:any) {
    this.nuevocon={
      codlibro:value.codlibro,
      nombrelibro:value.nombrelibro,
      Idautor:value.Idautor,
      Ideditorial:value.Ideditorial,
      FechaLanzamiento:value.FechaLanzamiento
    }
    console.log(this.nuevocon)
    this.contacto.altalibro(this.nuevocon).subscribe(datos => {
      console.log(datos)
      alert("Libro agregado ")
      this.myform.reset()
      this.recuperarTodoslibros()
     });
  }

  bajalibro(Idlibro:number) {
    if (window.confirm("Esta seguro de eliminar el libro Numero "+Idlibro+" ?")) {
      this.contacto.bajalibro(Idlibro).subscribe(datos => {
        console.log(datos)
        alert("Libro eliminado ")
        this.myform.reset()
        this.recuperarTodoslibros()
      });
    }

   
  }

  modificacionlibro(value:any) {
    this.nuevocon={
      codlibro:value.codlibro,
      nombrelibro:value.nombrelibro,
      Idautor:value.Idautor,
      Ideditorial:value.Ideditorial,
      FechaLanzamiento:value.FechaLanzamiento
    }
    this.contacto.modificacionlibro(this.nuevocon,this.id_editar).subscribe(datos => {
      console.log(datos)
      alert("Libro editado ")
      this.myform.reset()
      this.recuperarTodoslibros()
    });    
  }
  
  seleccionar(con_edi:any) {
   this.id_editar=con_edi['Idlibro'];
   this.myform.setValue({
   codlibro:con_edi['codlibro'],
   nombrelibro:con_edi['nombrelibro'],
   Idautor:'',
   Ideditorial:'',
   FechaLanzamiento:con_edi['FechaLanzamiento']
  })
  
  } 
}