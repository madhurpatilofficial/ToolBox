import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FindcapitalComponent } from './findcapital/findcapital.component';
import { CurrencyconverterComponent } from './currencyconverter/currencyconverter.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
