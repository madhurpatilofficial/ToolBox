// country-service.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {
  private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCountryPopulation(countryCode: string): Observable<number> {
    const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
    return this.http.get<any[]>(url).pipe(
      map(response => response?.[0]?.population) // Extract population from the first item of the array
    );
  }
  
  
}