import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { SliderService  } from '../services/SliderService'


@Component({
  templateUrl: 'app.html'
})
export class SevenArrowsApp {
  rootPage = HomePage;

  slider: SliderService;

  constructor(platform: Platform, slider: SliderService) {
    this.slider = slider;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  public openArrow(index: number) {
    this.slider.goToSlide(index - 1);
  }
}
