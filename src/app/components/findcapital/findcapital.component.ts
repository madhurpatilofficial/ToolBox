// findcapital.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-findcapital',
  templateUrl: './findcapital.component.html',
  styleUrls: ['./findcapital.component.css']
})
export class FindcapitalComponent implements OnInit {
  selectedCountry: string = '';
  capital: string = '';
  error: string = '';
  countryNames: string[] = [];
  private searchTerm$ = new Subject<string>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.searchTerm$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term) => this.fetchCountryData(term))
      )
      .subscribe(
        (data) => {
          this.handleCountryData(data);
        },
        (error) => {
          this.handleFetchError(error);
        }
      );

    this.fetchCountryNames();
  }

  fetchCountryNames(): void {
    const apiUrl = 'https://restcountries.com/v3.1/all';
    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.countryNames = data.map(country => country.name.common);
        const indiaIndex = this.countryNames.indexOf('India');
        if (indiaIndex !== -1) {
          this.countryNames.splice(indiaIndex, 1);
        }
        this.countryNames.unshift('India/Bharat');
      },
      (
        error) => {
          console.error('Error fetching country names', error);
        }
      );
    }
  
    onCountrySelected(): void {
      console.log('Selected country:', this.selectedCountry);
      this.searchTerm$.next(this.selectedCountry);
    }
    
    private fetchCountryData(countryName: string) {
      console.log('Fetching data for:', countryName);
      const apiUrl = `https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}`;
      return this.http.get<any[]>(apiUrl);
    }
    
  
    private handleCountryData(data: any[]) {
      console.log('Received data:', data);
      if (Array.isArray(data) && data.length > 0) {
        const countryData = data[0];
  
        if ('capital' in countryData) {
          if (Array.isArray(countryData.capital)) {
            this.capital = countryData.capital[0] || 'Capital information not available';
          } else {
            this.capital = countryData.capital || 'Capital information not available';
          }
        } else {
          this.capital = 'Capital information not available';
        }
  
        this.error = ''; // Clear previous errors
      } else {
        this.capital = '';
        this.error = 'Country information not available for the specified name.';
      }
    }
  
    private handleFetchError(error: any) {
      console.error('Error fetching data:', error);
      this.capital = '';
      this.error = 'Error fetching data from the API.';
      console.error(error);
    }
  }
  