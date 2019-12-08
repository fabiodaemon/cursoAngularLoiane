import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuformComponent } from './meuform.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MeuformComponent],
  exports: [
    MeuformComponent
  ]
})
export class MeuformModule { }
