import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/';

@Injectable()
export class WeatherService {

  constructor(private _http: Http ) { }

  getWeather(city: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=27e1fe7103a055811726397b2639e58f`)
    .map( data => data.json ())
    .toPromise();
  }

}
