import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartType, PluginOptionsByType, registerables } from 'chart.js';
import 'chartjs-plugin-gradient';
import { CountryServiceService } from '../../services/country-service.service';

interface CustomPluginOptions extends PluginOptionsByType<'bar'> {
  gradient?: {
    start: string;
    end: string;
    color: string[];
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  countries: any[] = [];
  selectedCountryCode: string = '';
  selectedCountryName: string = '';
  countryPopulation: number | undefined;
  errorMessage: string | undefined;
  chartType: string = 'bar';
  chart: any;
  top5HighPopulation: any[] = [];
  top5LowPopulation: any[] = [];
  additionalInfo: any = {};
  isPopulationGraphModalOpen: boolean = false;
  isHiddenInfoVisible: boolean = false;

  @ViewChild('populationChart') populationChart!: ElementRef;

  constructor(private countryService: CountryServiceService) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.countryService.getAllCountries().subscribe(
      (countries) => {
        this.countries = countries;
        this.findTop5HighPopulation();
        this.findTop5LowPopulation();
      },
      (error) => {
        this.errorMessage = 'Error fetching countries. Please try again.';
      }
    );
    this.fetchCountryPopulation();
    this.renderPopulationChart();
  }

  colors: string[] = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(128, 0, 128, 1)',
    'rgba(255, 0, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(0, 255, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(0, 0, 255, 1)',
  ];

  fetchCountryPopulation() {
    // Fetch population data for the selected country
    this.countryService
      .getCountryPopulation(this.selectedCountryCode)
      .subscribe(
        (population) => {
          this.countryPopulation = population;
          this.selectedCountryName = this.countries.find(
            (country) => country.cca2 === this.selectedCountryCode
          )?.name.common;
          this.errorMessage = undefined;
          this.renderChart();
          this.showBorder();
          this.toggleBlinking();
          this.additionalInfo = this.countries.find(
            (country) => country.cca2 === this.selectedCountryCode
          );
        },
        (error) => {
          this.errorMessage = 'Error fetching population. Please try again.';
          this.countryPopulation = undefined;
        }
      );
  }

  isBlinking: boolean = false; // Added isBlinking property
  toggleBlinking() {
    this.isBlinking = true;
  }

  showBorder() {
    const chartSection = document.querySelector('.chart-section');
    if (chartSection) {
      chartSection.classList.add('show-border');
    }
  }

  renderChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    if (ctx) {
      if (this.chart) {
        this.chart.destroy();
      }

      if (this.chartType === 'bar') {
        this.renderBarChart(ctx);
      } else if (this.chartType === 'pie') {
        this.renderPieChart(ctx);
      }
    }
  }

  renderBarChart(ctx: HTMLCanvasElement) {
    const gradient = ctx.getContext('2d')!.createLinearGradient(0, 0, 0, 400);

    gradient.addColorStop(0, '#439cfb');
    gradient.addColorStop(1, '#f187fb');

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [this.selectedCountryName],
        datasets: [
          {
            label: 'Population',
            data: [this.countryPopulation],
            backgroundColor: gradient,
            borderColor: '#00000',
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  renderPieChart(ctx: HTMLCanvasElement) {
    const gradient = ctx.getContext('2d')!.createLinearGradient(0, 0, 0, 400);

    gradient.addColorStop(0, '#439cfb');
    gradient.addColorStop(1, '#f187fb');
    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [this.selectedCountryName],
        datasets: [
          {
            label: 'Population',
            data: [this.countryPopulation],
            backgroundColor: gradient,
            borderColor: '#00000',
            borderWidth: 2,
          },
        ],
      },
    });
  }

  findTop5HighPopulation() {
    this.top5HighPopulation = this.countries
      .filter((country) => country.population !== undefined)
      .sort((a, b) => b.population - a.population)
      .slice(0, 5);
  }

  findTop5LowPopulation() {
    this.top5LowPopulation = this.countries
      .filter((country) => country.population !== undefined)
      .sort((a, b) => a.population - b.population)
      .slice(0, 5);
  }

  getCountryInfo(field: string): any {
    if (this.additionalInfo && this.additionalInfo[field]) {
      if (field === 'currencies') {
        const currencies = this.additionalInfo[field];
        const currencyNames = Object.values(currencies).map(
          (currency: any) => currency.name
        );
        return currencyNames.join(', ');
      } else if (field === 'flags' || field === 'coatOfArms') {
        return this.additionalInfo[field]?.png;
      } else if (typeof this.additionalInfo[field] === 'object') {
        return Object.values(this.additionalInfo[field]).join(', ');
      } else {
        return this.additionalInfo[field];
      }
    } else {
      return 'N/A';
    }
  }

  openPopulationGraphModal() {
    this.isPopulationGraphModalOpen = true;
  }

  closePopulationGraphModal() {
    this.isPopulationGraphModalOpen = false;
  }

  toggleHiddenInfo() {
    this.isHiddenInfoVisible = !this.isHiddenInfoVisible;
  }

  renderPopulationChart(): void {
    this.countryService.getAllCountries().subscribe((countries) => {
      const labels = countries.map((country) => country.name.common);
      const populations = countries.map((country) => country.population);

      const ctx = this.populationChart.nativeElement.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Population',
                data: populations,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: this.colors.slice(0, populations.length),
                borderWidth: 3,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    });
  }
}
