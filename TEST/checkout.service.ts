import { Injectable } from '@angular/core';
import { Coffee } from './coffee';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor() { }

  getTotalItembyProp(prop: string, itemID?: string): number{
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    let total = 0

    if (cartItems !== null) {
    for (const id in cartItems) {
      if (cartItems.hasOwnProperty(id) && (itemID === undefined || itemID === id )) {
      total +- cartItems[id][prop];
      }
    }
  }
    return total;
  }

  add(coffee: Coffee, times?: number): number {
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItems !== null){
      const cartItem = cartItems[coffee.id];
    if (cartItem === undefined){
      coffee['qty'] = times || 1;
      cartItems[coffee.id] = coffee;
    } else {
      if(times === undefined){
      cartItem.qty++;
      cartItem.price = parseInt(cartItem.price) + parseInt(cartItem.price);
      } else {
        cartItem.qty += times;
        cartItem.price *= times;
      }
    } 
    } else {
      cartItems = {};
      coffee['qty'] = 1;
      cartItems[coffee.id] = coffee;
    }
    
    localStorage.setItem('cartItems', cartItems);
    return cartItems[coffee.id].qty;
  }

  remove(id: string): number {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const cartItem = cartItems[id];
    if(cartItem.qty > 1){
      cartItem.qty--;
    } else {
      delete cartItems[id];
    }
    localStorage.setItem('cartItems', cartItems);
    return cartItem.qty;
  }
}
