// currency-converter.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {
  private apiUrl = 'https://open.er-api.com/v6/latest/USD'; // Example API, replace with your API

  constructor(private http: HttpClient) {}

  getConversionRates(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  convert(amount: number, fromCurrency: string, toCurrency: string, rates: any): number {
    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];
  
    if (fromRate && toRate) {
      const baseAmount = amount / fromRate;
      return baseAmount * toRate;
    }
  
    return 0;
  }
  
}
