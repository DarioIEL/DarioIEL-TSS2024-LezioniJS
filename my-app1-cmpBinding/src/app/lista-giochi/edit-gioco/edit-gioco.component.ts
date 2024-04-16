import { Component, EventEmitter, Output } from '@angular/core';
import { Gioco } from '../gioco.model';

@Component({
  selector: 'app-edit-gioco',
  templateUrl: './edit-gioco.component.html',
  styleUrl: './edit-gioco.component.css',
})
export class EditGiocoComponent {
  //Qui dentro creo il mio gioco per poterlo emettere verso il parent
  @Output() onGioco = new EventEmitter<Gioco>();

  // mioNuovoGioco: Gioco = new Gioco(
  //   'Mastermind',
  //   'gioco da tavolo',
  //   1970,
  //   'https://i.ebayimg.com/images/g/jtgAAOSwGHJiIZ0D/s-l1600.jpg',
  //   2
  // );

  mioNuovoGioco: Gioco;

  nomeGioco: string;
  genereGioco: string;
  annoUscitaGioco: number;
  locandinaGioco: string;

  //Il metodo onCreaGioco si occuperà di emettere il nuovo gioco sfruttando l'event emitter
  onCreaGioco() {
    this.mioNuovoGioco = {
      nome: this.nomeGioco,
      genere: this.genereGioco,
      annoUscita: this.annoUscitaGioco,
      locandina: this.locandinaGioco,
    };

    this.onGioco.emit(this.mioNuovoGioco);
  }
}
