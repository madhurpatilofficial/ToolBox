import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {
  private apiUrl = 'https://restcountries.com/v3.1/all';
  private countriesCache$: Observable<any[]> | undefined;

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any[]> {
    if (!this.countriesCache$) {
      this.countriesCache$ = this.http.get<any[]>(this.apiUrl).pipe(
        shareReplay(1) // Cache the response and share it among subscribers
      );
    }
    return this.countriesCache$;
  }

  getCountryPopulation(countryCode: string): Observable<number> {
    const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
    return this.http.get<any[]>(url).pipe(
      map(response => response?.[0]?.population), // Extract population from the first item of the array
      shareReplay(1) // Cache the response and share it among subscribers
    );
  }
}