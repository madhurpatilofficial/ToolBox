import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clockmessage: string = "Check realtime date and time"
  flagmessage: string = "Discover flags of different countries quickly and easily"
  colorpicker: string = "Explore a variety of colors and their RGB formats with our interactive color picker including Gradient Color"
  capitalmessage: string = "Discover the capitals of different countries quickly, efficiently and accurately"
  currencymessage: string = "Convert currencies easily with real-time exchange rates from around the world included with all countries"
  calculatormessage: string = "Perform basic and advanced calculations with our user-friendly calculator"
  constructor() { }

  ngOnInit(): void {
  }


}
