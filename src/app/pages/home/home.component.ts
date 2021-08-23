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

  buscarElemento(aBuscarLegajo: number):number
  {
    var i=0;
    var flag=0;
    var pos=-1;
    for(i=0;  i<this.listaNumeros.length  && flag==0 ;i++)
    {
      if(this.listaNumeros[i] === aBuscarLegajo)
      {
        flag=1;
        pos=i;
      }
    }
    return pos;
  }
  eliminarElemento(desde:number)
  {
    this.listaNumeros.splice(desde,1);
  }

  controladorEliminar()
  {
    var posicion = this.buscarElemento(3);
    if(posicion!=1)
      this.eliminarElemento(posicion);
  }
}
