import { Component, OnInit } from '@angular/core';
import { UtentiService } from '../../utenti.service';
import { Utente } from '../../models/utente.model';

@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrl: './lista-utenti.component.css',
})
export class ListaUtentiComponent implements OnInit {
  listaUtenti: Utente[];

  // Adesso sfrutto il principio della dependency Injection. Nel costruttore della classe inietto la dipendenza
  constructor(private utentiServ: UtentiService) {}

  // ngOnInit() metodo dell'interfaccia OnInit. Fa parte della famiglia dei lifeCycle Hook
  ngOnInit(): void {
    // this.listaUtenti = this.utentiServ.listaUtenti;
    this.listaUtenti = this.utentiServ.getAllUtenti();
  }

  onRemoveUtente(id: number) {
    this.listaUtenti = this.utentiServ.removeUtenteById(id);
  }
}
