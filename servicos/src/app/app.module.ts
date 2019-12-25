import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosService } from './cursos/cursos.service';
import { CursosModule } from './cursos/cursos.module';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CriarCursoModule,
    CursosModule
  ],
  // providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
