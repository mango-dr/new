import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoffeeComponent } from './coffee/coffee.component';

import { CoffeeSearchComponent } from './coffee-search/coffee-search.component';
import { CoffeeFormComponent } from './coffee-form/coffee-form.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
// @ts-ignore
import { environment } from 'src/environments/environment';
import { AuthModule } from './modules/auth/auth.module';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { MessagesComponent } from './messages/messages.component';


const ANGULAR_MODULES = [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  HttpClientModule,
  HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
  ),
];

const FIREBASE_MODULES = [
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFirestoreModule,
  AngularFireAuthModule
];

const APP_MODULES = [
  AuthModule
];

const MATERIAL_MODULES = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatCardModule,
  MatDividerModule,
  MatMenuModule,
  MatProgressBarModule
];

@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    CoffeeSearchComponent,
    CoffeeFormComponent,
    CoffeeDetailComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    CartComponent,
    ShippingComponent,
    FavoriteComponent,
    MessagesComponent
  ],
  imports: [
    ...ANGULAR_MODULES,
    ...FIREBASE_MODULES,
    ...APP_MODULES,
    ...MATERIAL_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

