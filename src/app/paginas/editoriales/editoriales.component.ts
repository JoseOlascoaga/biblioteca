import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.component.html',
  styleUrls: ['./editoriales.component.css']
})
export class EditorialesComponent implements OnInit {

  myform:FormGroup  
  id_editar:number=0;
  constructor(private _builder:FormBuilder,private contacto: ContactoService) { 
    this.myform=this._builder.group({
      codeditorial: ['', [Validators.required]] ,
      nombre: ['', [Validators.required, Validators.maxLength(50)]]  ,
    })
  }

  lista_editoriales: any;

  nuevoeditorial={
    codeditorial:null,
    nombre:null
  }
  ngOnInit(): void {
    this.recuperarTodoseditoriales();
  }

  recuperarTodoseditoriales() {
    this.contacto.recuperarTodoseditoriales().subscribe(result => this.lista_editoriales = result);
  }

  altaeditorial(value:any) {
    this.nuevoeditorial={
      codeditorial:value.codeditorial,
      nombre:value.nombre
    }
    this.contacto.altaeditorial(this.nuevoeditorial).subscribe(datos => {
      alert("Editorial agregado ")
      console.log(datos)
      this.myform.reset()
     });
  }

  bajaeditorial(IdEditorial:number) {
    if (window.confirm("Esta seguro de eliminar el Editorial Numero "+IdEditorial+" ?")) {
      this.contacto.bajaa(IdEditorial).subscribe(datos => {
        console.log(datos)
        alert("Editorial eliminado ")
        this.myform.reset()
        this.recuperarTodoseditoriales()
      });
    }
   
  }

  modificacioneditorial(value:any) {
    this.nuevoeditorial={
      codeditorial:value.codeditorial,
      nombre:value.nombre
    }
    this.contacto.modificacioneditorial(this.nuevoeditorial,this.id_editar).subscribe(datos => {
      console.log(datos)
      alert("Editorial editado ")
      this.myform.reset()
      this.recuperarTodoseditoriales()
    });    
  }

  seleccionar(id_edi:any) {
    this.id_editar=id_edi['IdEditorial'];
    this.myform.setValue({
    codeditorial:id_edi['codeditorial'],
    nombre:id_edi['nombre']
   })
   }


}
