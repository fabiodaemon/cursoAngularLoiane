import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretive-ngclass',
  templateUrl: './diretive-ngclass.component.html',
  styleUrls: ['./diretive-ngclass.component.css']
})
export class DiretiveNgclassComponent implements OnInit {

  meuFavorito: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.meuFavorito = !this.meuFavorito;
  }

}
