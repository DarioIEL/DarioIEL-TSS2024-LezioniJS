import { Component } from '@angular/core';
import { Panino } from '../models/panino.model';

@Component({
  selector: 'app-lista-panini',
  templateUrl: './lista-panini.component.html',
  styleUrl: './lista-panini.component.css'
})
export class ListaPaniniComponent {

  listaPanini: Panino[] = [
    {
      nome: "Poldo",
      ingredienti: ["Hamburger", "Pomodoro", "Insalata"],
      prezzo: 6.50
    },
    {
      nome: "Bruto",
      ingredienti: ["Hamburger", "Bacon", "Uovo", "Carciofi", "Ceddar"],
      prezzo: 9.20
    },
    {
      nome: "Olivia",
      ingredienti: ["Olive taggiasche", "Fesa di tacchino", "Pomodori Secchi", "Burrata"],
      prezzo: 12
    },
    {
      nome: "Braccio di Ferro",
      ingredienti: ["Spinaci", "Doppio burger di tonno", "Maionese", "Camambert"],
      prezzo: 14.50
    }
  ]

}
