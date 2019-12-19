import { Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer){ 

    // console.log(this._elementRef);
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    // evitar esse codigo acima por ser ma pratica e possibilitar vunerabilidades, por mais que faz mesma coisa que a abaixo
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
      )

   }

}
