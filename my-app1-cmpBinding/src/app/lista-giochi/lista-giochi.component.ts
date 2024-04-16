import { Component } from '@angular/core';
import { Gioco } from './gioco.model';

@Component({
  selector: 'app-lista-giochi',
  templateUrl: './lista-giochi.component.html',
  styleUrl: './lista-giochi.component.css',
})
export class ListaGiochiComponent {
  listaGiochi: Gioco[] = [
    new Gioco(
      'Tetris',
      'videogame',
      1984,
      'https://i.etsystatic.com/12175780/r/il/ad753a/1940198935/il_fullxfull.1940198935_l7y8.jpg',
      1
    ),

    new Gioco(
      'Space Invaders',
      'videogame',
      1978,
      'https://static.posters.cz/image/750/poster/space-invaders-screen-i31915.jpg',
      2
    ),

    new Gioco(
      'Minecraft',
      'videogame',
      2011,
      'https://media.s-bol.com/DWwVV28EO17k/nRGVlAl/550x792.jpg',
      'illimitato'
    ),

    new Gioco(
      'Monopoly',
      'gioco da tavolo',
      1935,
      'https://cdn.idealo.com/folder/Product/5842/9/5842906/s10_produktbild_gross/hasbro-monopoly-game-c1009.jpg',
      6
    ),
  ];

  onAggiungiGioco(gioco: Gioco) {
    this.listaGiochi.push(gioco);
  }
}
