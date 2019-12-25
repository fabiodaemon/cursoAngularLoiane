import { Injectable } from '@angular/core';

@Injectable()
export class CursosService{

    private cursos: string[] = ['Angular','Java','Phonegap'];

    constructor(){
        console.log('CursosService');
        // isso é uma exemplificação para mostrar que o serviço so foi chamado uma unica vez
        // sem precisar que ela seja instanciada em cada novo componente
    }

    getCursos(){
        return this.cursos;
    }

    addCurso(curso: string){
        this.cursos.push(curso);
    }

}