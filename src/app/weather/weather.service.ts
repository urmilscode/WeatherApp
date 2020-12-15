import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {ICurrentWeather} from '../interfaces/icurrent-weather';

interface ICurrentWeatherData {
  weather: [{
    description: string;
  }];
  main: {
    temp: number;
  };
  sys: {
    country: string;
  };
  dt: number;
  name: string;
}


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(city: string, country: string) {
    const uriParams = new HttpParams()
      .set('q', `${city}, ${country}`)
      .set('appid', environment.appId)
    return this.httpClient.get<ICurrentWeatherData> (
      `${environment.baseUrl}api.openweathermap.org/data/2.5/weather/`,
      {params: uriParams}
    );
  }
}
