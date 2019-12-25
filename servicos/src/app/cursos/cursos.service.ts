import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService{

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();
    // o static funciona que nao precisa da instancia da classe para acessá-lo, diferente do
    // emitirCursoCriado que so funciona mediante a criação de uma instancia

    private cursos: string[] = ['Angular','Java','Phonegap'];

    constructor(){
        console.log('CursosService');
    }

    getCursos(){
        return this.cursos;
    }

    addCurso(curso: string){
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
        // preciso disso pq ela é static
    }

}