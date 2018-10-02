import { Component, OnInit, Input } from '@angular/core';
import { weatherBit } from '../../environments/environment';
import { CityDetails } from '../models/city-details';
import { WeatherForecast } from '../models/weather-forecast';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent implements OnInit {
  weatherBitUrl: string;
  weatherForecasts: WeatherForecast[];
  @Input() receivedText: string;
  cityDetails: CityDetails;

  constructor(private http: HttpClient) {
    this.weatherForecasts =[];
    this.weatherBitUrl = ``;
    this.cityDetails= new CityDetails ('','');
  }

  getWeather() {
    this.weatherBitUrl = `${weatherBit.urlBase}?city=${this.receivedText}&key=${weatherBit.apiKey}`;
    //subscribe to weatherbit forecase results here
    this.http.get(this.weatherBitUrl).subscribe((result:any)=>{
      console.log(result);
      this.cityDetails = new CityDetails (result['city_name'], result['state_code']);
      console.log(this.cityDetails.cityName+" "+this.cityDetails.stateCode);

      
      result['data'].forEach ((forecast)=>{
        //console.log (forecast.max_temp+" "+forecast.datetime);
        this.weatherForecasts.push(new WeatherForecast (forecast.max_temp, forecast.datetime));
      });
      
      
    });
  }

  ngOnInit() {
  }

}
