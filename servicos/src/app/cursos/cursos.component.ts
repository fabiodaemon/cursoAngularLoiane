import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service'

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
  // esta é uma opção colocar o provider aqui caso queira que apenas um componente acesse este serviço
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursosService: CursosService) { 
   }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    );

  }

}
