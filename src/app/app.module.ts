import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import {PastWeatherComponent} from './past-weather/pastweather.component';
import  {FutureWeatherComponent} from './future-weather/futureweather.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    PastWeatherComponent,
    FutureWeatherComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
