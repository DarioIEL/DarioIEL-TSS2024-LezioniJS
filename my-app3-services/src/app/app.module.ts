import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUtentiComponent } from './utenti/lista-utenti/lista-utenti.component';
import { GestioneUtentiComponent } from './utenti/gestione-utenti/gestione-utenti.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UtentiComponent } from './utenti/utenti.component';
import { PizzeriaComponent } from './pizzeria/pizzeria.component';
import { PizzaComponent } from './pizzeria/pizza/pizza.component';
import { BirreriaComponent } from './birreria/birreria.component';
import { BirraComponent } from './birreria/birra/birra.component';
import { BlogComponent } from './blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { NoleggioAutoComponent } from './noleggio-auto/noleggio-auto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUtentiComponent,
    GestioneUtentiComponent,
    NavbarComponent,
    HomeComponent,
    UtentiComponent,
    PizzeriaComponent,
    PizzaComponent,
    BirreriaComponent,
    BirraComponent,
    BlogComponent,
    NoleggioAutoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
