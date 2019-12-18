import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { DiretiveNgclassComponent } from './diretive-ngclass/diretive-ngclass.component';
import { DiretiveNgstyleComponent } from './diretive-ngstyle/diretive-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NgswitchComponent,
    DiretiveNgclassComponent,
    DiretiveNgstyleComponent,
    OperadorElvisComponent,
    ExemploNgContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
