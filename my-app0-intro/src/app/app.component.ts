import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Prop di classe
  title = 'my-app0-intro';
  autore: string = "Dario";

  studente: {
    nome: string,
    cognome: string,
    matricola: number
  } = {
    nome: "Eliana",
    cognome: "Bove",
    matricola: 1
  }

  benvenuto: string = "";

  stampaInConsole(): string{
    let saluto: string = "Ciao";
    console.log(saluto);
    return saluto
  }

  onStampaBenvenuto(){
    this.benvenuto = "Ciao, benvenuto al corso Angular";
  }

}
