import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {FavItem } from './fav-item';
import { Coffee } from './coffee';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  drinks: FavItem[] = [];

  constructor(private http: HttpClient) { }



  addToFavorite(coffee: Coffee) {
    const coffeeFav = this.drinks.find(item => item.id === coffee.id);
    if (coffeeFav) {
      coffeeFav.count ++;
    } else {
      const newItem = {id: coffee.id, coffee, name: coffee.name, price: coffee.price, count:1}
    this.drinks.push(newItem);
  }
  }


  getFavorites() {
    return this.drinks;
  }

  clearFavorite() {
    this.drinks = [];
    return this.drinks;
  }

}
