import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  nombre:String="Bryan"
  numero1:number=10
  numero2:number=20
  estado_trabajo:boolean=true
  suma:number=0


  constructor() { }

  /*
ngOnInit está puramente ahí para darnos una señal de que Angular ha terminado de inicializar el componente”.
  */
  ngOnInit(): void {
this.suma=this.numero1+this.numero2


  }

}
