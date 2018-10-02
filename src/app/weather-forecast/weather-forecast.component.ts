import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {
  @Input() cityName:string;
  @Input() state:string;
  @Input() maxTemp:string;
  @Input() dateTime:string;
  constructor() {
    this.cityName =' ';
    this.dateTime =' ';
    this.maxTemp =' ';
    this.state = ' ';
  }

  ngOnInit() {
  }

}
