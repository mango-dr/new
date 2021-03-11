import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { CoffeeSearchComponent } from './coffee-search/coffee-search.component';
import { CoffeeFormComponent } from './coffee-form/coffee-form.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { MessagesComponent } from './messages/messages.component';
import { SplashComponent } from './splash/splash.component';

// material
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthModule } from './modules/auth/auth.module';
// @ts-ignore
import { environment } from 'src/environments/environment';

// translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// animation & style
import { ClickColorDirective } from './click-color.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashScreenStateService } from './splash-screen-state.service';



export function translateLoaderFactory(http: HttpClient): TranslateHttpLoader{
  return new TranslateHttpLoader(http);
}

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
  MatProgressBarModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule
];

const TRANSLATION_MODULE = [
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: translateLoaderFactory,
      deps: [HttpClient]
    }
  })
];

const ANIMATION_MODULES = [
  BrowserAnimationsModule
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
    MessagesComponent,
    ClickColorDirective,
    SplashComponent,

  ],
  imports: [
    ...ANGULAR_MODULES,
    ...FIREBASE_MODULES,
    ...APP_MODULES,
    ...MATERIAL_MODULES,
    ...TRANSLATION_MODULE,
    ...ANIMATION_MODULES
  ],
  providers: [
    SplashScreenStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

