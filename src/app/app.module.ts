import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './home/product/product.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { WomensectionComponent } from './womensection/womensection.component';
import { MensectionComponent } from './mensection/mensection.component';
import { JewelryComponent } from './jewelry/jewelry.component';
import { ViewdetailsComponent } from './home/product/viewdetails/viewdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductComponent,
    ElectronicsComponent,
    WomensectionComponent,
    MensectionComponent,
    JewelryComponent,
    ViewdetailsComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
