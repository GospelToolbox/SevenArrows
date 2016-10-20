import { Component, ViewChild } from '@angular/core';

import { NavController, Slides } from 'ionic-angular';

import { SliderService } from '../../services/SliderService'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('arrowSlider') slides: Slides;

  constructor(public navCtrl: NavController, private slider: SliderService) {
    slider.subscribe(ndx => this.slides.slideTo(ndx));
  }


}
