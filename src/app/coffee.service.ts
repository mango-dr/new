import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Coffee } from './coffee';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  private drinksUrl = 'api/drinks';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  private log(message: string) {
    this.messageService.add(`CoffeeService: ${message}`);
  }

  getDrinks(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.drinksUrl)
      .pipe(
        tap(_ => this.log('fetched drinks')),
        catchError(this.handleError<Coffee[]>('getDrinks', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getCoffee(id: number): Observable<Coffee> {
    const url = `${this.drinksUrl}/${id}`;
    return this.http.get<Coffee>(url).pipe(
      tap(_ => this.log(`fetched coffee id=${id}`)),
      catchError(this.handleError<Coffee>(`getCoffee id=${id}`))
    );
  }

  updateCoffee(coffee: Coffee): Observable<any> {
    return this.http.put(this.drinksUrl, coffee, this.httpOptions).pipe(
      tap(_ => this.log(`updated coffee id=${coffee.id}`)),
      catchError(this.handleError<any>('updateCoffee'))
    );
  }

  searchDrinks(term: string): Observable<Coffee[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Coffee[]>(`${this.drinksUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found drinks matching "${term}"`) :
        this.log(`no drinks matching "${term}"`)),
      catchError(this.handleError<Coffee[]>('searchDrinks', []))
    );
  }
}

//   getDrinks(): Observable<Coffee[]> {
//     // TODO: send the message _after_ fetching the drinks
//     this.messageService.add('CoffeeService: fetched drinks');
//     return of(Drinks);
//   }

//   getCoffee(id: number): Observable<Coffee> {
//     // TODO: send the message _after_ fetching the coffee
//     this.messageService.add(`CoffeeService: fetched coffee id=${id}`);
//     return of(Drinks.find(coffee => coffee.id === id));
//   }
// }
