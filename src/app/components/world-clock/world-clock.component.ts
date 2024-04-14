// world-clock.component.ts

import { Component } from '@angular/core';
import { WorldTimeService } from '../../services/world-service.service';
import { countries } from '../../constants/countries';

@Component({
  selector: 'app-world-clock',
  templateUrl: './world-clock.component.html',
  styleUrls: ['./world-clock.component.css']
})
export class WorldClockComponent {
  countries = countries;
  selectedCountryCode: string = '';
  currentTime: any;
  hourMarkers: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  minuteMarkers: number[] = Array.from({ length: 60 }, (_, i) => i + 1);

  constructor(private worldTimeService: WorldTimeService) { }

  onCountryChange() {
    this.worldTimeService.getTimeByCountry(this.selectedCountryCode)
      .subscribe((data: any) => {
        this.currentTime = data;
        // Parse the datetime string to get year, time, and timezone separately
        const dateTimeParts = data.datetime.split('T');
        this.currentTime.year = dateTimeParts[0];
        let timeParts = dateTimeParts[1].split('.')[0].split(':'); // Extract time without milliseconds and split into parts
        const hours = parseInt(timeParts[0]);
        const minutes = parseInt(timeParts[1]);
        const seconds = parseInt(timeParts[2]);
        this.currentTime.time = this.formatTime(hours, minutes, seconds);
      });
  }

  formatTime(hours: number, minutes: number, seconds: number): string {
    const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine if it's AM or PM
    const formattedHours = hours % 12 || 12; // Handle midnight (0 hours)
    return `${formattedHours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} ${ampm}`;
  }

  getHourRotation(time: string): string {
    const hours = parseInt(time.split(':')[0]);
    return ((hours % 12) * 30).toString(); // 30 degrees for each hour on the clock
  }

  getMinuteRotation(time: string): string {
    const minutes = parseInt(time.split(':')[1]);
    return (minutes * 6).toString(); // 6 degrees for each minute on the clock
  }

  getSecondRotation(time: string): string {
    const seconds = parseInt(time.split(':')[2]);
    return (seconds * 6).toString(); // 6 degrees for each second on the clock
  }
}
