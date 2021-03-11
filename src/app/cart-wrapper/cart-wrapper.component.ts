import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-cart-wrapper',
  templateUrl: './cart-wrapper.component.html',
  styleUrls: ['./cart-wrapper.component.css']
})
export class CartWrapperComponent implements OnInit {

  assetPath = './assets/';
  private _cartItems: any = [];
  constructor(public cart: CheckoutService) { }

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    
  }

  get cartItems(){
    return Object.values(JSON.parse(localStorage.getItem('cartItems')));
  }
  set cartItems(items){
    this._cartItems = items;
  }
}
