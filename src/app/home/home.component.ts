import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { SplashScreenStateService } from '../splash-screen-state.service';

// import { Nav, Platform } from 'ionic-angular';



export interface User {
  id: string;
  email: string;
  name: string;
  photoUrl: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  title = 'Сoffee-app';
  users;
  currentUser: User;

  animation;

  constructor(private fireStore: AngularFirestore,
              public fireAuth: AngularFireAuth,
              private splashScreenStateService: SplashScreenStateService){}

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.fireStore.collection<User>('users').valueChanges().subscribe(users => this.users = users);
    this.fireAuth.user.pipe(
      switchMap(user => of(this.users.find(u => u.email === u.email)))
    // tslint:disable-next-line: deprecation
    ).subscribe(user => this.currentUser = user);

    setTimeout(() => {
      this.splashScreenStateService.stop();
   }, 5000);
  }



}
