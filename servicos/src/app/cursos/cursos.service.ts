import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from './../shared/log.service';

@Injectable()
export class CursosService{

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();
    // o static funciona que nao precisa da instancia da classe para acessá-lo, diferente do
    // emitirCursoCriado que so funciona mediante a criação de uma instancia

    private cursos: string[] = ['Angular','Java','Phonegap'];

    constructor(private logService: LogService){
        console.log('CursosService');
    }

    getCursos(){
        this.logService.consoleLog('Obtendo lista de cursos');
        return this.cursos;
    }

    addCurso(curso: string){
        this.logService.consoleLog(`Criando novo curso ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
        // preciso disso pq ela é static
    }

}