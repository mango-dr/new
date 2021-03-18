import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {FavItem } from './fav-item';
import { Coffee } from './coffee';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  favorites: FavItem[] = [];

  constructor(private http: HttpClient) { }



  addToFavorite(coffee: Coffee): void {
    const index = this.favorites.findIndex(item => item.id === coffee.id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    } else {
      const newItem = {id: coffee.id, coffee};
    this.favorites.push(newItem);
  }
  }


  getFavorites(): FavItem[] {
    return this.favorites;
  }

  isFavorite(id: number): boolean {
  return !!this.favorites.find(item => item.id === id);
  }
  // clearFavorite() {
  //   this.drinks = [];
  //   return this.drinks;
  // }

}
