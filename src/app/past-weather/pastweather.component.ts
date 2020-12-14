import {Component} from '@angular/core';
import {PastWeather} from '../interfaces/pastweather';

@Component({
  selector: 'app-pw',
  templateUrl: './pastweather.component.html'
})
export class PastWeatherComponent {
  past: PastWeather;
  constructor() {
    this.past = {
      city: 'Chicago',
    country: 'USA',
    date: new Date(),
    description: 'Harsh Winter projected for the next few Months!!',
    temperature: 4,
    } as PastWeather;
  }
}
