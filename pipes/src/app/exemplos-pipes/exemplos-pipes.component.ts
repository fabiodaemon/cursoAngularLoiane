import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {
  
  livro: any = {
    titulo: 'learning javasCript datA Structures and alghorithms 2nd Ed',
    rating: 4.133,
    numeroPaginas: 314,
    preco: 49.90,
    dataLancamento: new Date(2016,5,23),
    url: 'g1.globo.com'
  };

  livros: string[] = ['Angular 2', 'Java'];

  filtro: string;

  addCurso(valor){
    this.livros.push(valor);
  }

  constructor() { }

  ngOnInit() {
  }

}
