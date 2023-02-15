import { Component, OnInit } from '@angular/core';
import { OpenweatherService } from 'src/app/services/openweather/openweather.service'; 

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: any;

  constructor(private openweatherService: OpenweatherService) {

  }

  ngOnInit() {
  }

  getWeather(cityName: string, countryCode: string) {
    this.openweatherService.getWeather(cityName, countryCode)
      .subscribe(
        res => {
          console.log(res);
          this.weather = res
        },
        err => console.log(err)
      )
  }

  postLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    this.getWeather(cityName.value, countryCode.value)

    cityName.value = '';
    countryCode.value = '';
    cityName.focus();

    return false;
  }

}