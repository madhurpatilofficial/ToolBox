import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FindcapitalComponent } from './components/findcapital/findcapital.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyconverterComponent } from './components/currencyconverter/currencyconverter.component';
import { ColorDisplayComponent } from './components/color-display/color-display.component';
import { FindflagComponent } from './components/findflag/findflag.component';
import { FinduniversityComponent } from './components/finduniversity/finduniversity.component';
import { UniversityService } from './services/university.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { WorldClockComponent } from './components/world-clock/world-clock.component';
import { WorldTimeService } from './services/world-service.service';

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
    FooterComponent,
    WorldClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [UniversityService, WorldTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
