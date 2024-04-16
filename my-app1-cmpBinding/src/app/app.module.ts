import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaGiochiComponent } from './lista-giochi/lista-giochi.component';
import { GiocoComponent } from './lista-giochi/gioco/gioco.component';
import { EditGiocoComponent } from './lista-giochi/edit-gioco/edit-gioco.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaGiochiComponent,
    GiocoComponent,
    EditGiocoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
