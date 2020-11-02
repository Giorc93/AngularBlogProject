// Creating model (ng g class)

export class Car {
  /*
  public year: number;
  public model: string;
  public image: string;

  constructor(year, model, image) {
    this.year = year;
    this.model = model;
    this.image = image;
  }
  */
  /*Using TS */
  constructor(
    public year: number,
    public model: string,
    public image: string
  ) {}
}
