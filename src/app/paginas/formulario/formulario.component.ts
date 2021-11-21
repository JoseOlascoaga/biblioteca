import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  myform:FormGroup  
  id_editar:number=0;
  constructor(private _builder:FormBuilder,private contacto: ContactoService) { 
    this.myform=this._builder.group({
      identificacion: ['', [Validators.required]]  ,
      fullname: ['', [Validators.required, Validators.maxLength(50)]]  ,
      phone: ['', [Validators.required]]  ,
      email: ['', [Validators.required, Validators.maxLength(100)]] 
    })
  }
  lista_contactos: any;
  nuevocon={
    identificacion:null,
    fullname:null,
    phone:null,
    email:null
  }
 

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.contacto.recuperarTodos().subscribe(result => this.lista_contactos = result);
  }



  alta(value:any) {
    this.nuevocon={
      identificacion:value.identificacion,
      fullname:value.fullname,
      phone:value.phone,
      email:value.email
    }
    this.contacto.alta(this.nuevocon).subscribe(datos => {
      console.log(datos)
      alert("Contacto agregado ")
      this.myform.reset()
      this.recuperarTodos()
     });
  }

  baja(id:number) {
    if (window.confirm("Esta seguro de eliminar el registro Numero "+id+" ?")) {
      this.contacto.baja(id).subscribe(datos => {
        console.log(datos)
        alert("Contacto eliminado ")
        this.myform.reset()
        this.recuperarTodos()
      });
    }

   
  }

  modificacion(value:any) {
    this.nuevocon={
      identificacion:value.identificacion,
      fullname:value.fullname,
      phone:value.phone,
      email:value.email
    }
    this.contacto.modificacion(this.nuevocon,this.id_editar).subscribe(datos => {
      console.log(datos)
      alert("Contacto editado ")
      this.myform.reset()
      this.recuperarTodos()
    });    
  }
  
  seleccionar(con_edi:any) {
   this.id_editar=con_edi['id'];
   this.myform.setValue({
   identificacion:con_edi['identificacion'],
   fullname:con_edi['fullname'],
   phone:con_edi['phone'],
   email:con_edi['email']
  })
  }
}