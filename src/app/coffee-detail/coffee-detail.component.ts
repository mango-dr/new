import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css']
})
export class CoffeeDetailComponent implements OnInit {
  
  addToCart(coffee) {
    this.cartService.addToCart(coffee);
    window.alert('Your product has been added to the cart!');
  }
  
  coffee: Coffee;
  assetPath = './assets/';
  
  constructor(
    private route: ActivatedRoute,
    private coffeeService: CoffeeService,
    private location: Location,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getCoffee();
  }

  getCoffee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.coffeeService.getCoffee(id)
      .subscribe(coffee => this.coffee = coffee);
  }

  goBack(): void {
    this.location.back();
  }


}
