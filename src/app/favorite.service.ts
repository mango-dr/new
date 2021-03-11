import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {FavItem } from './fav-item';
import { Coffee } from './coffee';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  favorites: FavItem[] = [];

  addToFavorite(coffee: Coffee): void {
    const index = this.favorites.findIndex(item => item.id === coffee.id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    } else {
      const newItem = {id: coffee.id, coffee};
      this.favorites.push(newItem);
    }
  }

  isFavorite(id: number): boolean {
    return !!this.favorites.find(item => item.id === id);
  }

  getFavorites(): FavItem[] {
    return this.favorites;
  }
}
