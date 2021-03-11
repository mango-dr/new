import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  drinks = [];

  addToCart(coffee) {
    this.drinks.push(coffee);
  }

  remove(coffee){
    this.drinks.splice(coffee.id);
  }

  removeFromCart(id: number): number {
    const drinks = JSON.parse(localStorage.getItem('drinks'));
    const coffee = drinks[id];
    if(coffee.qty > 1){
      coffee.qty--;
    } else {
      delete drinks[id];
    }
    localStorage.setItem('drinks', drinks);
    return coffee.qty;
  }

  getDrinks() {
    return this.drinks;
  }

  clearCart() {
    this.drinks = [];
    return this.drinks;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  
}
