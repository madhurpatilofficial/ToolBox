import { Component, OnInit } from '@angular/core';
import { Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';
import { FindCapitalService } from '../../services/find-capital.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
  isLargeScreen: boolean = false;




  protected searchTerm$ = new Subject<string>();

  constructor(private findCapitalService: FindCapitalService, private breakpointObserver: BreakpointObserver) { }


  ngOnInit(): void {
    this.fetchCountryNames();
    this.breakpointObserver.observe([Breakpoints.Large, Breakpoints.XLarge])
    .subscribe(result => {
      this.isLargeScreen = result.matches;
    });

    this.searchTerm$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term) => this.findCapitalService.findCapital(term)),
        catchError(error => {
          this.handleFetchError(error);
          return of([]);
        })
      )
      .subscribe(
        (data) => {
          this.handleCountryData(data);
        }
      );
  }

  fetchCountryNames(): void {
    this.findCapitalService.fetchCountryNames().subscribe(
      (data: any[]) => {
        this.countryNames = data.map(country => country.name.common);
      },
      (error) => {
        this.handleFetchError(error);
      }
    );
  }

  onCountrySelected(): void {
    this.searchTerm$.next(this.selectedCountry);
  }

  private handleCountryData(data: any[]): void {
    if (Array.isArray(data) && data.length > 0) {
      const countryData = data[0];
      if (this.selectedCountry === 'India') {
        this.capital = 'New Delhi';
      } else if ('capital' in countryData) {
        this.capital = Array.isArray(countryData.capital) ? countryData.capital[0] || 'Capital information not available' : countryData.capital || 'Capital information not available';
      } else {
        this.capital = 'Capital information not available';
      }
      this.error = ''; // Clear previous errors
    } else {
      this.capital = '';
      this.error = 'Country information not available for the specified name.';
    }
  }  

  private handleFetchError(error: any): void {
    this.capital = '';
    this.error = 'Error fetching data from the API.';
  }
}