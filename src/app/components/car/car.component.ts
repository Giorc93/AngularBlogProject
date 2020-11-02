import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  @Input() car: Car;
  @Input() i: any;

  // Creating Output value to send data through event to parent component
  @Output() markFavEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  markFav(e, car): void {
    // Catching event (click) and data
    this.markFavEvent.emit({
      // Using .emit method to send data (car)
      car,
    });
  }
}
