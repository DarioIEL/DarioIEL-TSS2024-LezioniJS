import { Injectable } from '@angular/core';
import { Pizza } from './model/pizza.model';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  listaPizze: Pizza[] = [
    new Pizza(
      1,
      'Margherita',
      6.5,
      'https://it.ooni.com/cdn/shop/articles/Margherita-9920.jpg?crop=center&height=800&v=1644590028&width=800'
    ),
    new Pizza(
      2,
      'Marinara',
      5.5,
      'https://media-assets.lacucinaitaliana.it/photos/63c01847f5d7419a2dc115ef/1:1/w_1334,h_1334,c_limit/Pizza%20Marinara.jpg'
    ),
    new Pizza(
      3,
      'Capricciosa',
      8.5,
      'https://www.ricettealvolo.it/wp-content/uploads/2023/02/pizza-capricciosa-scaled.jpg'
    ),
  ];

  constructor() {}

  getPizzaById(id: number) {
    let pizza = this.listaPizze.find((pizza) => {
      return pizza.id === id;
    });
    return pizza;
  }
}
