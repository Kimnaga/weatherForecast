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
  weatherObj:WeatherForecast;

  constructor(private http: HttpClient) {
    this.weatherForecasts = [];
    this.weatherBitUrl = ``;
    this.cityDetails = new CityDetails();
    this.weatherObj = new WeatherForecast();
  }

  getWeather() {
    this.weatherBitUrl = `${weatherBit.urlBase}?city=${this.receivedText}&key=${weatherBit.apiKey}`;
    //subscribe to weatherbit forecase results here
    this.http.get(this.weatherBitUrl).subscribe((result:any)=>{
      console.log(result);
      this.cityDetails.cityName = result['city_name'];
      this.cityDetails.stateCode =result['state_code'];
      //console.log(this.cityDetails.cityName+" "+this.cityDetails.stateCode);

      
      result['data'].forEach (function (forecast){
        console.log (forecast.max_temp+" "+forecast.datetime);
        //this.weatherObj.maxTemp = forecast.max_temp;
        //this.weatherObj.date = forecast.datetime;
        //this.weatherForecasts.push(this.weatherObj);
      });
      
    });
  }

  ngOnInit() {
  }

}
