import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { SevenArrowsApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SliderService } from '../services/SliderService'

@NgModule({
  declarations: [
    SevenArrowsApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(SevenArrowsApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SevenArrowsApp,
    HomePage
  ],
  providers: [
    SliderService
  ]
})
export class AppModule {}
