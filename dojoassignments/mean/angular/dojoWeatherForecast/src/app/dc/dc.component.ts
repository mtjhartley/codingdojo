import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service'; //import the service into all components

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

  //define all variables the template will be using, based on our json response.
  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  clouds;

  constructor(private _weatherService: WeatherService) { } //update the constructor with the private WeatherService method, which we created earlier in weather.service.ts

  ngOnInit() {
    this.weather = this._weatherService.getWeather('washingtondc')
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
