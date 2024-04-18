import { Component } from '@angular/core';
import { Birra } from './model/birra.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-birreria',
  templateUrl: './birreria.component.html',
  styleUrl: './birreria.component.css'
})
export class BirreriaComponent {

  constructor(){
    
  }
  listaBirre: Birra[] = [
    new Birra(0, "Heineken", 3.8, 33, 4.50),
    new Birra(1, "Peroni 1846", 5, 66, 4.60),
    new Birra(2, "Moretti", 4.8, 33, 2.90)
  ];

  marcaBirra: String;

  onNomeBirra(marca: String){
  
    console.log("Hai scelto " + marca);
    this.marcaBirra = marca
  }
  


}
