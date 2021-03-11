import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoffeeComponent } from './coffee/coffee.component';
import { CartComponent } from './cart/cart.component';
import { CoffeeFormComponent } from './coffee-form/coffee-form.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './modules/components/login/login.component';
import { RegistrationComponent } from './modules/components/registration/registration.component';
import { UserprofileComponent } from './modules/components/user-profile/user-profile.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'profile', component: UserprofileComponent},
  { path: 'cart', component: CartComponent},
  { path: 'shipping', component: ShippingComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: CoffeeDetailComponent },
  { path: 'drinks', component: CoffeeComponent },
  { path: 'form', component: CoffeeFormComponent},
  { path: '**', component: NotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
