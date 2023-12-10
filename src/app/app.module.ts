import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FindcapitalComponent } from './findcapital/findcapital.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyconverterComponent } from './currencyconverter/currencyconverter.component';
import { ColorDisplayComponent } from './color-display/color-display.component';
import { FindflagComponent } from './findflag/findflag.component';
import { FinduniversityComponent } from './finduniversity/finduniversity.component';
import { UniversityService } from './university.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalculatorComponent,
    FindcapitalComponent,
    HomeComponent,
    CurrencyconverterComponent,
    ColorDisplayComponent,
    FindflagComponent,
    FinduniversityComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [UniversityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
