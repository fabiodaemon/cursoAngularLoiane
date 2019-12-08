import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;
  // o 0 não está apárecendo, porque esta colocado a variavel valorInicial no data-binding.ts

  @Output() mudouValor = new EventEmitter();

  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  };
  
  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  };

  constructor() { }

  ngOnInit() {
  }

}
