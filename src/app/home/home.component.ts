import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';


export interface User {
  id: string;
  email: string;
  name: string;
  photoUrl: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Сoffee-app';
  users;
  currentUser: User;

  constructor(private fireStore: AngularFirestore,
              public fireAuth: AngularFireAuth) {

  }

  ngOnInit(): void {
    this.fireStore.collection<User>('users').valueChanges().subscribe(users => this.users = users);
    this.fireAuth.user.pipe(
      switchMap(user => of(this.users.find(u => u.email === u.email)))
    ).subscribe(user => this.currentUser = user);
  }

}