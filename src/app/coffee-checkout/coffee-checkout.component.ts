import { Component, Input, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';
import { Coffee } from '../coffee';


// interface ProductInfo{
//   _id: string;
//   imagePath: string;
//   title: string;
//   description: string;
//   price: string;
// }

@Component({
  selector: 'app-coffee-checkout',
  templateUrl: './coffee-checkout.component.html',
  styleUrls: ['./coffee-checkout.component.css']
})
export class CoffeeCheckoutComponent implements OnInit {

  @Input() coffee: Coffee;
   assetPath = './assets/';
   qtyAddedToCart: number;
  

  constructor(private cart: CheckoutService) { }

  ngOnInit(): void {
    // this.qtyAddedToCart = this.cart.getTotalItembyProp('qty', this.coffee.id);
  }


  addToCart(): void {
    this.qtyAddedToCart = this.cart.add(this.coffee);
  }
  removeFromCart(): void {
    // this.qtyAddedToCart = this.cart.remove(this.coffee.id);
  
  }
}
