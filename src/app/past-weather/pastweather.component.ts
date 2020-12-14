import { Component } from '@angular/core';
import {PastWeather} from '../interfaces/pastweather';

@Component({
  selector: 'app-pw',
  templateUrl: './pastweather.component.html'
})
export class PastweatherComponent {
  past: PastWeather;

  constructor() {
    this.past = {
      city: 'Chicago',
      country: 'USA',
      date: new Date(),
      description: 'The following scenario depicts the previous weather of the city of Chicago!!',
    } as PastWeather;
  }
}
