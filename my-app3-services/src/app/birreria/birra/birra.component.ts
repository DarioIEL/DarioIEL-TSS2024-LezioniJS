import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Birra } from '../model/birra.model';

@Component({
  selector: 'app-birra',
  templateUrl: './birra.component.html',
  styleUrl: './birra.component.css'
})
export class BirraComponent {

  @Input('birraInput') birra: Birra;

  @Output('marcaOutput') nomeBirra = new EventEmitter<String>();


  onSelezionaBirra(){
    console.log("Stai selezionando " + this.birra.marca);
    this.nomeBirra.emit(this.birra.marca);
  }
}
