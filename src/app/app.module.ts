import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {IonicStorageModule} from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MenuPage} from '../pages/menu/menu' ;
import {ProductsByCategoryPage} from '../pages/products-by-category/products-by-category';
import {ProductDetailsPage} from '../pages/product-details/product-details';
import {CartPage} from '../pages/cart/cart';
import {SignupPage} from '../pages/signup/signup';
import {LoginPage} from '../pages/login/login';
import {CheckoutPage} from '../pages/checkout/checkout'
import {HttpModule} from '@angular/http';
import {PayPal} from '@ionic-native/paypal'
import {OneSignal} from '@ionic-native/onesignal'
import {SearchPage} from '../pages/search/search'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    ProductsByCategoryPage,
    ProductDetailsPage,
    CartPage,
    SignupPage,
    LoginPage,
    CheckoutPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    ProductsByCategoryPage,
    ProductDetailsPage,
    CartPage,
    SignupPage,
    LoginPage,
    CheckoutPage,
    SearchPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PayPal,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
