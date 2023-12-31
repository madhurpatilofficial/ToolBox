// university.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { University } from './university.model';

@Injectable({
  providedIn: 'root',
})
export class UniversityService {
  private apiUrl = 'http://universities.hipolabs.com/search?country=india';

  constructor(private http: HttpClient) {}

  getUniversities(): Observable<University[]> {
    return this.http.get<University[]>(this.apiUrl);
  }
}