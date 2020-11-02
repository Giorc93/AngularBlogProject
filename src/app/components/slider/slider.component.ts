import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input() public testPr: string;
  @Input() public size: string;
  constructor() {}

  ngOnInit(): void {}
}
