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

    
  onAggiungiPanino(): void{
    let nuovoPanino = new Panino("Vegano", ["Zucchine", "Funghi", "Seitan"], 5.50);
    console.log("Stai aggiungendo un nuovo panino");
    this.listaPanini.push(nuovoPanino);
  }

}
