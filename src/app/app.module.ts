import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './form/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginFormComponent } from './form/login-form/login-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import {NgxPaginationModule} from 'ngx-pagination';
import { CartComponent } from './common/cart/cart.component';
import { PaymentComponent } from './common/payment/payment.component';
import { AllusersComponent } from './allusers/allusers.component';
import {MatTableModule} from '@angular/material/table';
import { FilterPipe } from '../app/filter/filter.pipe';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginFormComponent,
    ProfileComponent,
    HomeComponent,
    CartComponent,
    PaymentComponent,
    AllusersComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    NgHttpLoaderModule.forRoot(),
    SweetAlert2Module.forRoot(),
    NgxPaginationModule,
    MatTableModule,
    MatStepperModule
  ],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
