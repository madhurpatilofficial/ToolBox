// findflag.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-findflag',
  templateUrl: './findflag.component.html',
  styleUrls: ['./findflag.component.css']
})
export class FindflagComponent implements OnInit {
  selectedCountry: string = '';
  countries: { value: string; display: string }[] = [
    { value: 'Bharat', display: 'India/Bharat' },
    { value: 'United States', display: 'United States' },
    { value: 'United Kingdom', display: 'United Kingdom' },
    { value: 'Afghanistan', display: 'Afghanistan' },
    { value: 'Albania', display: 'Albania' },
    { value: 'Algeria', display: 'Algeria' },
    { value: 'Andorra', display: 'Andorra' },
    { value: 'Angola', display: 'Angola' },
    { value: 'Antigua and Barbuda', display: 'Antigua and Barbuda' },
    { value: 'Argentina', display: 'Argentina' },
    { value: 'Armenia', display: 'Armenia' },
    { value: 'Australia', display: 'Australia' },
    { value: 'Austria', display: 'Austria' },
    { value: 'Azerbaijan', display: 'Azerbaijan' },
    { value: 'Bahamas', display: 'Bahamas' },
    { value: 'Bahrain', display: 'Bahrain' },
    { value: 'Bangladesh', display: 'Bangladesh' },
    { value: 'Barbados', display: 'Barbados' },
    { value: 'Belarus', display: 'Belarus' },
    { value: 'Belgium', display: 'Belgium' },
    { value: 'Belize', display: 'Belize' },
    { value: 'Benin', display: 'Benin' },
    { value: 'Bhutan', display: 'Bhutan' },
    { value: 'Bolivia', display: 'Bolivia' },
    { value: 'Bosnia and Herzegovina', display: 'Bosnia and Herzegovina' },
    { value: 'Botswana', display: 'Botswana' },
    { value: 'Brazil', display: 'Brazil' },
    { value: 'Brunei', display: 'Brunei' },
    { value: 'Bulgaria', display: 'Bulgaria' },
    { value: 'Burkina Faso', display: 'Burkina Faso' },
    { value: 'Burundi', display: 'Burundi' },
    { value: 'Cabo Verde', display: 'Cabo Verde' },
    { value: 'Cambodia', display: 'Cambodia' },
    { value: 'Cameroon', display: 'Cameroon' },
    { value: 'Canada', display: 'Canada' },
    { value: 'Central African Republic', display: 'Central African Republic' },
    { value: 'Chad', display: 'Chad' },
    { value: 'Chile', display: 'Chile' },
    { value: 'China', display: 'China' },
    { value: 'Colombia', display: 'Colombia' },
    { value: 'Comoros', display: 'Comoros' },
    { value: 'Congo', display: 'Congo' },
    { value: 'Costa Rica', display: 'Costa Rica' },
    { value: 'Côte d\'Ivoire', display: 'Côte d\'Ivoire' },
    { value: 'Croatia', display: 'Croatia' },
    { value: 'Cuba', display: 'Cuba' },
    { value: 'Cyprus', display: 'Cyprus' },
    { value: 'Czech Republic', display: 'Czech Republic' },
    { value: 'Denmark', display: 'Denmark' },
    { value: 'Djibouti', display: 'Djibouti' },
    { value: 'Dominica', display: 'Dominica' },
    { value: 'Dominican Republic', display: 'Dominican Republic' },
    { value: 'East Timor', display: 'East Timor' },
    { value: 'Ecuador', display: 'Ecuador' },
    { value: 'Egypt', display: 'Egypt' },
    { value: 'El Salvador', display: 'El Salvador' },
    { value: 'Equatorial Guinea', display: 'Equatorial Guinea' },
    { value: 'Eritrea', display: 'Eritrea' },
    { value: 'Estonia', display: 'Estonia' },
    { value: 'Eswatini', display: 'Eswatini' },
    { value: 'Ethiopia', display: 'Ethiopia' },
    { value: 'Fiji', display: 'Fiji' },
    { value: 'Finland', display: 'Finland' },
    { value: 'France', display: 'France' },
    { value: 'Gabon', display: 'Gabon' },
    { value: 'Gambia', display: 'Gambia' },
    { value: 'Georgia', display: 'Georgia' },
    { value: 'Germany', display: 'Germany' },
    { value: 'Ghana', display: 'Ghana' },
    { value: 'Greece', display: 'Greece' },
    { value: 'Grenada', display: 'Grenada' },
    { value: 'Guatemala', display: 'Guatemala' },
    { value: 'Guinea', display: 'Guinea' },
    { value: 'Guinea-Bissau', display: 'Guinea-Bissau' },
    { value: 'Guyana', display: 'Guyana' },
    { value: 'Haiti', display: 'Haiti' },
    { value: 'Honduras', display: 'Honduras' },
    { value: 'Hungary', display: 'Hungary' },
    { value: 'Iceland', display: 'Iceland' },
    { value: 'Indonesia', display: 'Indonesia' },
    { value: 'Iran', display: 'Iran' },
    { value: 'Iraq', display: 'Iraq' },
    { value: 'Ireland', display: 'Ireland' },
    { value: 'Israel', display: 'Israel' },
    { value: 'Italy', display: 'Italy' },
    { value: 'Jamaica', display: 'Jamaica' },
    { value: 'Japan', display: 'Japan' },
    { value: 'Jordan', display: 'Jordan' },
    { value: 'Kazakhstan', display: 'Kazakhstan' },
    { value: 'Kenya', display: 'Kenya' },
    { value: 'Kiribati', display: 'Kiribati' },
    { value: 'Korea, North', display: 'Korea, North' },
    { value: 'Korea, South', display: 'Korea, South' },
    { value: 'Kuwait', display: 'Kuwait' },
    { value: 'Kyrgyzstan', display: 'Kyrgyzstan' },
    { value: 'Laos', display: 'Laos' },
    { value: 'Latvia', display: 'Latvia' },
    { value: 'Lebanon', display: 'Lebanon' },
    { value: 'Lesotho', display: 'Lesotho' },
    { value: 'Liberia', display: 'Liberia' },
    { value: 'Libya', display: 'Libya' },
    { value: 'Liechtenstein', display: 'Liechtenstein' },
    { value: 'Lithuania', display: 'Lithuania' },
    { value: 'Luxembourg', display: 'Luxembourg' },
    { value: 'Madagascar', display: 'Madagascar' },
    { value: 'Malawi', display: 'Malawi' },
    { value: 'Malaysia', display: 'Malaysia' },
    { value: 'Maldives', display: 'Maldives' },
    { value: 'Mali', display: 'Mali' },
    { value: 'Malta', display: 'Malta' },
    { value: 'Marshall Islands', display: 'Marshall Islands' },
    { value: 'Mauritania', display: 'Mauritania' },
    { value: 'Mauritius', display: 'Mauritius' },
    { value: 'Mexico', display: 'Mexico' },
    { value: 'Micronesia', display: 'Micronesia' },
    { value: 'Moldova', display: 'Moldova' },
    { value: 'Monaco', display: 'Monaco' },
    { value: 'Mongolia', display: 'Mongolia' },
    { value: 'Montenegro', display: 'Montenegro' },
    { value: 'Morocco', display: 'Morocco' },
    { value: 'Mozambique', display: 'Mozambique' },
    { value: 'Myanmar', display: 'Myanmar' },
    { value: 'Namibia', display: 'Namibia' },
    { value: 'Nauru', display: 'Nauru' },
    { value: 'Nepal', display: 'Nepal' },
    { value: 'Netherlands', display: 'Netherlands' },
    { value: 'New Zealand', display: 'New Zealand' },
    { value: 'Nicaragua', display: 'Nicaragua' },
    { value: 'Niger', display: 'Niger' },
    { value: 'Nigeria', display: 'Nigeria' },
    { value: 'North Macedonia', display: 'North Macedonia' },
    { value: 'Norway', display: 'Norway' },
    { value: 'Oman', display: 'Oman' },
    { value: 'Pakistan', display: 'Pakistan' },
    { value: 'Palau', display: 'Palau' },
    { value: 'Panama', display: 'Panama' },
    { value: 'Papua New Guinea', display: 'Papua New Guinea' },
    { value: 'Paraguay', display: 'Paraguay' },
    { value: 'Peru', display: 'Peru' },
    { value: 'Philippines', display: 'Philippines' },
    { value: 'Poland', display: 'Poland' },
    { value: 'Portugal', display: 'Portugal' },
    { value: 'Qatar', display: 'Qatar' },
    { value: 'Romania', display: 'Romania' },
    { value: 'Russia', display: 'Russia' },
    { value: 'Rwanda', display: 'Rwanda' },
    { value: 'Saint Kitts and Nevis', display: 'Saint Kitts and Nevis' },
    { value: 'Saint Lucia', display: 'Saint Lucia' },
    { value: 'Saint Vincent and the Grenadines', display: 'Saint Vincent and the Grenadines' },
    { value: 'Samoa', display: 'Samoa' },
    { value: 'San Marino', display: 'San Marino' },
    { value: 'Sao Tome and Principe', display: 'Sao Tome and Principe' },
    { value: 'Saudi Arabia', display: 'Saudi Arabia' },
    { value: 'Senegal', display: 'Senegal' },
    { value: 'Serbia', display: 'Serbia' },
    { value: 'Seychelles', display: 'Seychelles' },
    { value: 'Sierra Leone', display: 'Sierra Leone' },
    { value: 'Singapore', display: 'Singapore' },
    { value: 'Slovakia', display: 'Slovakia' },
    { value: 'Slovenia', display: 'Slovenia' },
    { value: 'Solomon Islands', display: 'Solomon Islands' },
    { value: 'Somalia', display: 'Somalia' },
    { value: 'South Africa', display: 'South Africa' },
    { value: 'South Sudan', display: 'South Sudan' },
    { value: 'Spain', display: 'Spain' },
    { value: 'Sri Lanka', display: 'Sri Lanka' },
    { value: 'Sudan', display: 'Sudan' },
    { value: 'Suriname', display: 'Suriname' },
    { value: 'Sweden', display: 'Sweden' },
    { value: 'Switzerland', display: 'Switzerland' },
    { value: 'Syria', display: 'Syria' },
    { value: 'Taiwan', display: 'Taiwan' },
    { value: 'Tajikistan', display: 'Tajikistan' },
    { value: 'Tanzania', display: 'Tanzania' },
    { value: 'Thailand', display: 'Thailand' },
    { value: 'Togo', display: 'Togo' },
    { value: 'Tonga', display: 'Tonga' },
    { value: 'Trinidad and Tobago', display: 'Trinidad and Tobago' },
    { value: 'Tunisia', display: 'Tunisia' },
    { value: 'Turkey', display: 'Turkey' },
    { value: 'Turkmenistan', display: 'Turkmenistan' },
    { value: 'Tuvalu', display: 'Tuvalu' },
    { value: 'Uganda', display: 'Uganda' },
    { value: 'Ukraine', display: 'Ukraine' },
    { value: 'United Arab Emirates', display: 'United Arab Emirates' },
    { value: 'United Kingdom', display: 'United Kingdom' },
    { value: 'United States', display: 'United States' },
    { value: 'Uruguay', display: 'Uruguay' },
    { value: 'Uzbekistan', display: 'Uzbekistan' },
    { value: 'Vanuatu', display: 'Vanuatu' },
    { value: 'Vatican City', display: 'Vatican City' },
    { value: 'Venezuela', display: 'Venezuela' }

  ];

  flagUrl: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  loadFlag(): void {
    if (this.selectedCountry) {
      const apiUrl = `https://restcountries.com/v3.1/name/${encodeURIComponent(this.selectedCountry)}`;
      this.http.get<any[]>(apiUrl).subscribe(
        (data) => {
          if (Array.isArray(data) && data.length > 0 && data[0].flags) {
            this.flagUrl = data[0].flags.png;
          } else {
            this.flagUrl = '';
          }
        },
        (error) => {
          
          this.flagUrl = '';
        }
      );
    } else {
      this.flagUrl = '';
    }
  }

  downloadFlag(): void {
    if (this.flagUrl) {
      saveAs(this.flagUrl, 'country_flag.png');
    }
  }
}
