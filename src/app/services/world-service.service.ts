// world-time.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldTimeService {

  constructor(private http: HttpClient) { }

  getTimeByCountry(countryCode: string): Observable<any> {
    return this.http.get(`http://worldtimeapi.org/api/timezone/${countryCode}`);
  }
}
