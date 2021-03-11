import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
// @ts-ignore
import { User } from 'src/app/home/home.component';


@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private fireStore: AngularFirestore,
                public fireAuth: AngularFireAuth) {

 }

 register(email: string, pass: string, name: string, pict?: string): void {
    this.fireAuth.createUserWithEmailAndPassword(email, pass).then(data => {
      const user: User = {
        id: '',
        email,
        name,
        photoUrl: pict || ''
      };

      this.fireStore.collection('users').add(user).then(u => console.log(u));
    });
 }

 loginWithEmailAndPassword(email: string, pass: string): void {
        this.fireAuth.signInWithEmailAndPassword(email, pass);
      }


loginWithGoogle(): void {
    this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(loginedUser => {
    // @ts-ignore
    const loggedUserEmail = loginedUser.additionalUserInfo.profile.email;

    this.fireStore.collection('users', ref => ref.where('email', '==', loggedUserEmail)).snapshotChanges()
    .subscribe(users => {
        if (!users.length) {

    const newUser: User = {
    // @ts-ignore
    id: loginedUser.additionalUserInfo.profile.id,
    // @ts-ignore
    email: loginedUser.additionalUserInfo.profile.email,
    // @ts-ignore
    name: loginedUser.additionalUserInfo.profile.name,
    // @ts-ignore
    photoUrl: loginedUser.additionalUserInfo.profile.picture,
    // @ts-ignore
    havePassword: false
     };

    this.fireStore.collection('users').add(newUser);
    }
    });
});
}

    getCurrentUser(): Observable<User | null> {
    return this.fireAuth.user.pipe(
    switchMap(user =>
    this.fireStore.collection<User>('users', ref => ref.where('email', '==', user.email))
        .valueChanges()
        .pipe(map(users => users[0])))
        );
    }

// getUsers(): any {
//   const usersCollection: AngularFirestoreCollection<any> = this.fireStore.collection('users');
//   usersCollection.snapshotChanges().pipe(map(actions => {
//     return actions.map(a => {
//       console.log(a.payload.doc.id, a.payload.doc.data());
//       return a;
//     });
//   }));
// }

      logout(): void {
        this.fireAuth.signOut();
      }
    }
