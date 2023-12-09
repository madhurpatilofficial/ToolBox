// findcapital.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-findcapital',
  templateUrl: './findcapital.component.html',
  styleUrls: ['./findcapital.component.css']
})
export class FindcapitalComponent {
  selectedCountry: string = '';
  capital: string = '';
  error: string = '';
  countryNames: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
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
      (error) => {
        console.error('Error fetching country names', error);
      }
    );
  }

  findCapital(): void {
    if (!this.selectedCountry) {
      this.error = 'Please select a country.';
      return;
    }

    const countryNameMapping: { [key: string]: string } = {
      'India/Bharat': 'Bharat'
    };

    const mappedName = countryNameMapping[this.selectedCountry.trim()];
    const finalCountryName = mappedName || this.selectedCountry.trim();

    const apiUrl = `https://restcountries.com/v3.1/name/${encodeURIComponent(finalCountryName)}`;

    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        if (Array.isArray(data) && data.length > 0) {
          const countryData = data[0];
          if (countryData.capital) {
            this.capital = countryData.capital;
          } else if (countryData.capital && countryData.capital[0]) {
            this.capital = countryData.capital[0];
          } else {
            this.capital = 'Capital information not available';
          }

          this.error = '';
        } else {
          this.capital = '';
          this.error = 'Country information not available for the specified name.';
        }
      },
      (error) => {
        this.capital = '';
        this.error = 'Error fetching data from the API.';
        console.error(error);
      }
    );
  }
}
