import { Component, OnInit } from '@angular/core';
import { PizzaService } from './pizza.service';
import { Pizza } from './model/pizza.model';

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrl: './pizzeria.component.css',
})
export class PizzeriaComponent implements OnInit {
  listaPizze: Pizza[];

  constructor(private pizzaServ: PizzaService) {}

  ngOnInit(): void {
    this.listaPizze = this.pizzaServ.listaPizze;
  }
}
