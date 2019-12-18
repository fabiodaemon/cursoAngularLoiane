import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretive-ngstyle',
  templateUrl: './diretive-ngstyle.component.html',
  styleUrls: ['./diretive-ngstyle.component.css']
})
export class DiretiveNgstyleComponent implements OnInit {

  ativo: boolean = false;
  tamanhoFonte: number = 10;

  constructor() { }

  ngOnInit() {
  }

  mudarAtivo(){
    this.ativo = !this.ativo;
  }

}
