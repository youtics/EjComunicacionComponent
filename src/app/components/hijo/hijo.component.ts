import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijos',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() nombreHijo:string = 'sin nombre';
  @Input() lista:number[] = [10,20,30,40];

  constructor() { }

  ngOnInit(): void {
  }

}
