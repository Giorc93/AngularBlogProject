import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-test',
  templateUrl: './second-test.component.html',
  styleUrls: ['./second-test.component.css']
})
export class SecondTestComponent implements OnInit {

  public testB: boolean;

  constructor() {
    this.testB = true;
  }

  ngOnInit(): void {
  }

  hideSec(): void {
    if(this.testB === true) {
      this.testB = false;
    }else{
      this.testB = true;
    }
  }

}
