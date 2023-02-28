import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginFormComponent } from './form/login-form/login-form.component';
import { RegisterComponent } from './form/register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthguardGuard } from './authguard.guard';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './common/cart/cart.component';
import { PaymentComponent } from './common/payment/payment.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
  },
  { 
    path: 'products', 
    component: ProductsComponent, 
  },
  { 
    path: 'cart', 
    component: CartComponent, 
  },
  { 
    path: 'payment', 
    component: PaymentComponent, 
  },
  { 
    path: 'products/:id', 
    component: ProductDetailComponent 
  },
  { 
    path: 'loginform', 
    component: LoginFormComponent 
  },
  { 
    path: 'registerform', 
    component: RegisterComponent 
  },
  { 
    path: 'profile', 
    component: ProfileComponent,
    canActivate:[AuthguardGuard] 
  },
  {
    path:'**',
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
