import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-search',
  templateUrl: './coffee-search.component.html',
  styleUrls: ['./coffee-search.component.css']
})
export class CoffeeSearchComponent implements OnInit {

  drinks$: Observable<Coffee[]>;
  private searchTerms = new Subject<string>();

  constructor(private coffeeService: CoffeeService) {}


  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.drinks$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.coffeeService.searchDrinks(term)),
    );
  }
}
