import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CursosService {

  HttpModule

  constructor() { }

  getCursos(){
    return ['Java', 'Ext JS', 'Angular', 'teste'];
  }
}
