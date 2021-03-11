import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';
import { FavoriteService } from '../favorite.service';


// interface ProductInfo{
//   _id: string;
//   imagePath: string;
//   title: string;
//   description: string;
//   price: string;
// }

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})

export class CoffeeComponent implements OnInit {

  addToCart(coffee) {
    this.cartService.addToCart(coffee);
    window.alert('Your product has been added to the cart!');
  }

  addToFavorite(coffee) {
    this.favoriteService.addToFavorite(coffee);
    window.alert('Saved! Feel free to buy it later!');
  }

  selectedCoffee: Coffee;
  drinks: Coffee[];
  assetPath = './assets/';

  @Input() coffee: Coffee;

  constructor(private coffeeService: CoffeeService, 
              private cartService: CartService,
              private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.getDrinks();

  }

  onSelect(coffee: Coffee): void {
    this.selectedCoffee = coffee;
  }

  getDrinks(): void {
    this.coffeeService.getDrinks()
      .subscribe(drinks => this.drinks = drinks);
  }

}
