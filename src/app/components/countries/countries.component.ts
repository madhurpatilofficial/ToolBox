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
  modalChartType: string = 'bar';
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
    this.toggleBlinking();
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
    'rgba(255, 99, 132, 1)', // Bright Red
    'rgba(54, 162, 235, 1)', // Bright Blue
    'rgba(255, 206, 86, 1)', // Bright Yellow
    'rgba(75, 192, 192, 1)', // Bright Cyan
    'rgba(153, 102, 255, 1)', // Bright Purple
    'rgba(255, 159, 64, 1)', // Bright Orange
    'rgba(255, 99, 71, 1)', // Bright Tomato
    'rgba(0, 255, 127, 1)', // Bright Spring Green
    'rgba(255, 20, 147, 1)', // Bright Deep Pink
    'rgba(138, 43, 226, 1)', // Bright Blue Violet
    'rgba(0, 255, 255, 1)', // Bright Aqua
    'rgba(50, 205, 50, 1)', // Bright Lime Green
    'rgba(255, 69, 0, 1)', // Bright Red Orange
    'rgba(30, 144, 255, 1)', // Bright Dodger Blue
    'rgba(255, 140, 0, 1)', // Bright Dark Orange
    'rgba(218, 112, 214, 1)', // Bright Orchid
    'rgba(0, 191, 255, 1)', // Bright Deep Sky Blue
    'rgba(127, 255, 0, 1)', // Bright Chartreuse
    'rgba(255, 105, 180, 1)', // Bright Hot Pink
    'rgba(147, 112, 219, 1)', // Bright Medium Purple
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
    this.renderPopulationChart();
  }

  closePopulationGraphModal() {
    this.isPopulationGraphModalOpen = false;
  }

  toggleHiddenInfo() {
    this.isHiddenInfoVisible = !this.isHiddenInfoVisible;
  }

  createGradient(ctx: CanvasRenderingContext2D, chartArea: any): CanvasGradient {
    const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);
    gradient.addColorStop(0, '#439cfb');
    gradient.addColorStop(1, '#f187fb');
    return gradient;
  }

  renderPopulationChart(): void {
    this.countryService.getAllCountries().subscribe((countries) => {
      const labels = countries.map((country) => country.name.common);
      const populations = countries.map((country) => country.population);

      const ctx = this.populationChart.nativeElement.getContext('2d');
      if (ctx) {
        if (this.chart) {
          this.chart.destroy();
        }

        const commonOptions = {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        };

        const chartOptions: any = {
          type: this.modalChartType as ChartType,
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Population',
                data: populations,
                backgroundColor: '#FFC0CB',
                borderColor: this.colors.slice(0, populations.length),
                borderWidth: 3,
                datalabels: {
                  display: true,
                  color: '#000',
                },
              },
            ],
          },
          options: {
            ...commonOptions,
            plugins: {
              legend: {
                display: true,
                labels: {
                  color: '#000', // Change this if you want to style the labels
                  filter: (legendItem: any, data: any) => {
                    if (
                      this.modalChartType === 'polarArea' ||
                      this.modalChartType === 'doughnut'
                    ) {
                      return false; // Hide external labels
                    }
                    return true; // Show external labels for other chart types
                  },
                },
              },
            },
          },
        };

        this.chart = new Chart(ctx, chartOptions);
      }
    });
  }
}
