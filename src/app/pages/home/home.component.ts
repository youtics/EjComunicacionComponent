import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombre:string='Gabriel';
  listaNumeros:number [] = [1,2,3,40];
  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre():string
  {
    return this.nombre = 'Gabriel Chaldu'
  }

  agregarNumero()
  {
    this.listaNumeros.push(6);
  }
}
