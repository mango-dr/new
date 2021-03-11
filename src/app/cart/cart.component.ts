import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CartService } from '../cart.service';
import { Coffee } from '../coffee';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  drinks = this.cartService.getDrinks();
  assetPath = './assets/';
 item;

  constructor(private cartService: CartService,
              private location: Location) { }

  get price(): number {
    return this.drinks.reduce((sum, drink) => {
      sum += drink.count * drink.coffee.price;
      return sum;
    }, 0);
  }

  increase(coffee: Coffee): void {
    this.cartService.addToCart(coffee);
  }

  decrease(coffee: Coffee): void {
    this.cartService.decreaseCount(coffee.id);
  }

  count(coffee: Coffee): void {
    this.cartService.countPrice(coffee);
  }

  goBack(): void {
    this.location.back();
  }

  removeFromCart(id: number): void {
    this.cartService.removeFromCart(id);
    window.alert('Your product has been deleted from the cart!');
  }

}




