import { Directive, Input, TemplateRef, ViewContainerRef  } from '@angular/core';

// TemplateRef serve para renderizar o template em si e ViewContainerRef é para conteudo do template

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean){
    if(!condition){
      this._viewContainerRef.createEmbeddedView(this._templateRef);
      // createEmbeddedView serve pra renderizar essa view embutida no template
    }else{
      this._viewContainerRef.clear();
      // destroi o elemento quando nao atendida a minha condição
    }
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    // é any pq pode ser utilizada em qlq tag
    private _viewContainerRef: ViewContainerRef
    ) { }

}
