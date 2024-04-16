import { Component, Input } from '@angular/core';
import { Gioco } from '../gioco.model';

@Component({
  selector: 'app-gioco',
  templateUrl: './gioco.component.html',
  styleUrl: './gioco.component.css',
})
export class GiocoComponent {
  //Con questo decorator dico al component che riceverà in input un giocoSingolo(nome della prop di classe) di tipo Gioco
  @Input() giocoSingolo: Gioco;

  assegnaColore(gioco: Gioco) {
    if (gioco.genere == 'videogame') {
      return 'bg-warning';
    } else if (gioco.genere == 'gioco da tavolo') {
      return 'bg-success';
    } else {
      return '';
    }
  }
}
