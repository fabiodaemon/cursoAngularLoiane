import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { DiretiveNgclassComponent } from './diretive-ngclass/diretive-ngclass.component';

@NgModule({
  declarations: [
    AppComponent,
    NgswitchComponent,
    DiretiveNgclassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
