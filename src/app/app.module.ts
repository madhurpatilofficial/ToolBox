import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { WorldClockComponent } from './components/world-clock/world-clock.component';
import { WorldTimeService } from './services/world-service.service';
import { AgeCalculatorComponent } from './components/age-calculator/age-calculator.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CountriesComponent } from './components/countries/countries.component';
import { FontsComponent } from './components/fonts/fonts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { StringManipulatorComponent } from './components/string-manipulator/string-manipulator.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AlertModule } from 'ngx-bootstrap/alert';

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
    FooterComponent,
    WorldClockComponent,
    AgeCalculatorComponent,
    FontsComponent,
    CountriesComponent,
    StringManipulatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatToolbarModule,
    AlertModule.forRoot(),
  ],
  providers: [WorldTimeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
