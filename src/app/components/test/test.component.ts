import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, DoCheck, OnDestroy{

  public title: string;
  public comment: string;
  public year: number;

  constructor() { // First method/fn to execute
    this.title = 'Test title';
    this.comment = 'Test comment';
    this.year = 2020;
   }

  ngOnInit(): void { // Executes right after constructor
    console.log('OnInit exec');
  }

  ngDoCheck(): void{ // Executes everytime it detects any change
    console.log('DoCheck exec');
  }

  chTitle(): void {
    this.title = 'Changed title';
    this.comment = 'Changed comment';
  }

  ngOnDestroy(): void { // Executes right before the instance is destroyed
    console.log('OnDestroy');
  }

}
