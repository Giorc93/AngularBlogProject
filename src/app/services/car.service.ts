import { Injectable } from '@angular/core'; // Importing injectable (Auto. using ng g service command)
import { Car } from '../models/car'; // Importing model to be used

@Injectable({
  providedIn: 'root',
})
export class CarService {
  public cars: Car[];

  constructor() {
    this.cars = [
      new Car(
        2018,
        'Ferrari LaFerrari',
        'https://bdc.autobild.es/sites/default/files/styles/body_768/public/dc/fotos/Ferrari-LaFerrari_2014_02.jpg?itok=CudSMRft'
      ),
      {
        year: 2020,
        model: 'Lamborghini Aventador',
        image:
          'https://ak.uecdn.es/p/110/sp/11000/thumbnail/entry_id/0_jazcffqi/version/100002/height/407',
      },
      {
        year: 2019,
        model: 'Porsche Cayene',
        image:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-porsche-cayenne-coupe-105-1553197365.jpg?crop=1.00xw:0.957xh;0,0&resize=1200:*',
      },
      {
        year: 2021,
        model: 'Audi R8',
        image:
          'https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/58646/audi-r8_v10_decennium-2019-1600-01.jpg',
      },
    ];
  }

  helloWorld(): any {
    return 'Hello World from car service';
  }

  getCars(): any {
    return this.cars;
  }
}
