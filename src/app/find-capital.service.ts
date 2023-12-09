// find-capital.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindCapitalService {
  private apiUrl = 'https://restcountries.com/v3.1/name/'; // Example API, replace with your API

  constructor(private http: HttpClient) { }

  findCapital(countryName: string): Observable<any> {
    const url = `${this.apiUrl}${countryName}`;
    return this.http.get(url);
  }
}
