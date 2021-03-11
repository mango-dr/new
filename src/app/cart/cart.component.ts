import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CartService } from '../cart.service';
import { Coffee } from '../coffee';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  drinks = this.cartService.getDrinks();
  assetPath = './assets/';
  qtyAddedToCart: number;
  @Input() coffee: Coffee;

  remove(coffee) {
    this.cartService.remove(coffee.id);
    window.alert('Your product has been deleted from the cart!');
  }

  
  removeFromCart(): void {
    this.qtyAddedToCart = this.cartService.removeFromCart(this.coffee.id);
    window.alert('Your product has been deleted from the cart!');
  
  }

  constructor(private cartService: CartService,
              private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
