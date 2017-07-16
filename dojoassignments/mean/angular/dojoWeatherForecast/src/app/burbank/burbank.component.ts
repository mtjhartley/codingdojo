import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  clouds;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.weather = this._weatherService.getWeather('burbank')
    .then( weather => {
      console.log(weather)
      this.humidity = weather.main.humidity;
      this.temp = weather.main.temp;
      this.temp = Math.floor(this.temp * (9/5) - 459.67);
      this.maxTemp = weather.main.temp_max;
      this.maxTemp = Math.floor(this.maxTemp * (9/5) - 459.67)
      this.minTemp = weather.main.temp_min;
      this.minTemp = Math.floor(this.minTemp * (9/5) - 459.67)
      this.clouds = weather.weather[0].description;
    })
    .catch(err => console.log(err))
  }

}
