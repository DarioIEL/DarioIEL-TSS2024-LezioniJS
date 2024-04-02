import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimoComponent } from './primo/primo.component';
import { ListaPaniniComponent } from './lista-panini/lista-panini.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimoComponent,
    ListaPaniniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
