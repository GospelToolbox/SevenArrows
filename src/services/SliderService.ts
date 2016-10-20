import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SliderService {
    
    private changeSlideEvent = new EventEmitter<number>();

    public goToSlide(index: number) {
        this.changeSlideEvent.next(index);
    }

    public subscribe(subscription: any) {
        return this.changeSlideEvent.subscribe(subscription);
    }   
}