import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItem } from './cart-item';
import { Coffee } from './coffee';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  drinks: CartItem[] = [];

  constructor(private http: HttpClient) { }



  addToCart(coffee: Coffee) {
    const coffeeInCart = this.drinks.find(item => item.id === coffee.id);
    if (coffeeInCart) {
      coffeeInCart.count ++;
    } else {
      const newItem = {id: coffee.id, coffee, count: 1}
      this.drinks.push(newItem);
    }
  }


  countPrice(coffee: Coffee) {
    const coffeeInCart = this.drinks.find(item => item.id === coffee.price);
    if (coffeeInCart) {
      coffeeInCart.count ++;
    } else {
      const newItem = {id: coffee.id, coffee, count: 1}
      this.drinks.push(newItem);
    } 
  }


decreaseCount(id: number): void {
  const coffeeInCart = this.drinks.find(item => item.id === id);
  if(!coffeeInCart) {
    return;
  }
  if (coffeeInCart.count === 0){
    return;
  }
  coffeeInCart.count--;
}

  removeFromCart(id: number): void {
    const coffeeToDeleteIndex = this.drinks.findIndex(item => item.id === id);
    if (coffeeToDeleteIndex === -1) {
      return;
    } 
    
    this.drinks.splice(coffeeToDeleteIndex, 1)
    // const drinks = JSON.parse(localStorage.getItem('drinks'));
    // const coffee = drinks[id];
    // if(coffee.qty > 1){
    //   coffee.qty--;
    // } else {
    //   delete drinks[id];
    // }
    // localStorage.setItem('drinks', drinks);
    // return coffee.qty;
  }


  getCoffeeCount(coffee: Coffee): number {
    const foundedCoffee = this.drinks.find(item => item.id === coffee.id);
    if (!foundedCoffee) {
      return 0;
    }
    return foundedCoffee.count;
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
