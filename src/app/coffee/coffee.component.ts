import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';
import { FavoriteService } from '../favorite.service';


@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})

export class CoffeeComponent implements OnInit {

  selectedCoffee: Coffee;
  drinks: Coffee[];
  assetPath = './assets/';


  constructor(private coffeeService: CoffeeService, 
              private cartService: CartService,
              private favoriteService: FavoriteService) { }


  ngOnInit(): void {
    this.getDrinks();

  }

  addToCart(coffee: Coffee): void {
    this.cartService.addToCart(coffee);
    window.alert('Your product has been added to the cart!');
  }

  addToFavorite(coffee: Coffee) {
    this.favoriteService.addToFavorite(coffee);
    window.alert('Saved! Feel free to buy it later!');
  }


increase(coffee: Coffee): void{
    this.cartService.addToCart(coffee);
 }

 decrease(coffee: Coffee): void{
  this.cartService.decreaseCount(coffee.id);
}

getCoffeeCount(coffee: Coffee): number {
  return this.cartService.getCoffeeCount(coffee);
}

  onSelect(coffee: Coffee): void {
    this.selectedCoffee = coffee;
  }

  getDrinks(): void {
    this.coffeeService.getDrinks()
      .subscribe(drinks => this.drinks = drinks);
  }

  coffeeInFavorite(id: number): boolean {
   return this.favoriteService.isFavorite(id);
  }

}
