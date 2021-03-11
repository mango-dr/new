import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  drinks = [];

  addToFavorite(coffee) {
    this.drinks.push(coffee);
  }

  getFavorites() {
    return this.drinks;
  }

  clearFavorite() {
    this.drinks = [];
    return this.drinks;
  }



  constructor() { }
}
