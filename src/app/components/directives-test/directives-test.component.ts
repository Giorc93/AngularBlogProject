import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from '../../services/car.service'; // Importing created service

@Component({
  selector: 'app-directives-test',
  templateUrl: './directives-test.component.html',
  styleUrls: ['./directives-test.component.css'],
  providers: [CarService], // Service must be loaded in providers
})
export class DirectivesTestComponent implements OnInit {
  public secText = 'Page 2 Text';

  public title: string;
  public cars: Array<Car>;
  public favCar: Car;

  constructor(private carService: CarService) {
    // Creating CarService object '_carService'
    this.title = 'Car Models';
    this.cars = this.carService.getCars();
  }

  ngOnInit(): void {
    console.log(this.cars);
    console.log(this.carService.helloWorld());
  }

  // Getting data sent from child comp
  showFav(e): void {
    this.favCar = e.car; // Setting favCar value to car
  }
}
