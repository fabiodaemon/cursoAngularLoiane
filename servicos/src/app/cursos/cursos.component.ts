import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service'

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  // cursosService: CursosService;

  constructor(private _cursosService: CursosService) { 
    // // this.cursosService = new CursosService();
    // // nao é boa prática fazer o acima, pois está instanciando manualmente e 
    // caso ela tenha tb um constructor (a classe servico) isso daria problemas

    // this.cursosService = _cursosService;
    // este é um exemplo sem ser classe privada, caso ela seja é necessário fazer o que está definido aqui
   }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();
  }

}
