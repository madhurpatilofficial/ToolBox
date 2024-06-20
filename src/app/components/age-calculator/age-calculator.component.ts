import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css']
})
export class AgeCalculatorComponent implements OnDestroy {
  age: any = {};
  birthDate: Date | null = null;
  maxDate: Date;
  minDate: Date;
  isLargeScreen: boolean = false;


  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Large, Breakpoints.XLarge])
    .subscribe(result => {
      this.isLargeScreen = result.matches;
    });
  }


  constructor(private breakpointObserver: BreakpointObserver) {
    this.maxDate = new Date();
    this.minDate = new Date(1910, 0, 1);
  }

  private timer: any;

  calculateAge() {
    if (this.birthDate) {
      const today = new Date();
      const birthDate = new Date(this.birthDate);
      let age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();

      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      const monthInMilliseconds = 30 * 24 * 60 * 60 * 1000;
      const dayInMilliseconds = 24 * 60 * 60 * 1000;

      const diffMilliseconds = Math.abs(today.getTime() - birthDate.getTime());
      
      this.age.years = age;
      this.age.months = Math.floor(diffMilliseconds / monthInMilliseconds);
      this.age.days = Math.floor(diffMilliseconds / dayInMilliseconds);
      this.age.hours = Math.floor(diffMilliseconds / (60 * 60 * 1000));
      this.age.minutes = Math.floor(diffMilliseconds / (60 * 1000));
      this.age.seconds = Math.floor(diffMilliseconds / 1000);

      // Update every second
      this.timer = setTimeout(() => {
        this.calculateAge();
      }, 1000);
    }
  }

  ngOnDestroy() {
    // Clear the timer when component is destroyed
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  getMinDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }
  
}
