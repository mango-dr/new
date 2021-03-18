import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { Location } from '@angular/common';
import { CartService } from '../cart.service';
import { Coffee } from '../coffee';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  drinks = this.favoriteService.getFavorites();
  // coffee: Coffee;

  constructor(private favoriteService: FavoriteService,
              private cartService: CartService,
              private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  addToCart(coffee) {
    this.cartService.addToCart(coffee);
    window.alert('Your product has been added to the cart!');
  }

}
