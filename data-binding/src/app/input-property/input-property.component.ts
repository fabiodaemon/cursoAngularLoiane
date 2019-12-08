import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // inputs: ['nomeCurso: nome'] caso queira colocar por aqui, porem prefira com o @Input() - caso mtas variaveis existam
})
export class InputPropertyComponent implements OnInit {

  // prefira a abaixo, a declaracao dos inputs para facilitar saber q e uma variavel input-property
  @Input('nome') nomeCurso: string = ''; 
  // @Input() nome: string = ''; outra possibilidade do acima

  // nomeCurso: string = ''; esta parte é apenas no caso que vc utilize os inputs!

  constructor() { }

  ngOnInit() {
  }

}
