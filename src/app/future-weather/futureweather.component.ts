import {Component} from '@angular/core';
import {FutureWeather} from '../interfaces/future-weather';

@Component({
  selector: 'app-futurew',
  templateUrl: './futureweather.component.html'
})
export class FutureWeatherComponent {
  future: FutureWeather;
  constructor() {
    this.future = {
      city: 'München',
    country: 'Deutschland',
    description: 'Es ist heute sonnisch im München Bavaria',
    temperature: 10,
    date: new Date(),
    } as FutureWeather;
  }
}
