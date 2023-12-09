import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FindcapitalComponent } from './findcapital/findcapital.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyconverterComponent } from './currencyconverter/currencyconverter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalculatorComponent,
    FindcapitalComponent,
    HomeComponent,
    CurrencyconverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
