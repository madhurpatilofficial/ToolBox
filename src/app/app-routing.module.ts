import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FindcapitalComponent } from './components/findcapital/findcapital.component';
import { CurrencyconverterComponent } from './components/currencyconverter/currencyconverter.component';
import { ColorDisplayComponent } from './components/color-display/color-display.component';
import { FindflagComponent } from './components/findflag/findflag.component';
import { WorldClockComponent } from './components/world-clock/world-clock.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  },
  {
    path: 'currencyconverter',
    component: CurrencyconverterComponent
  },
  {
    path: 'findcapital',
    component: FindcapitalComponent
  },
  {
    path: 'colorpicker',
    component: ColorDisplayComponent
  },
  {
    path: 'findflag',
    component: FindflagComponent
  },
  {
    path: 'worldclock',
    component: WorldClockComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
