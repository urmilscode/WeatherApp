import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces/icurrent-weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
    current: ICurrentWeather
  constructor() {
    this.current = {
      city: 'Berlin',
      country: 'Deutschland',
      date: new Date(),
      temperature: 72,
      description: 'sunny',
    } as ICurrentWeather;
  }

  ngOnInit(): void {
  }

}
