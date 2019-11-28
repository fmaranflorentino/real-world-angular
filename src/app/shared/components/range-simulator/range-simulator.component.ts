import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-range-simulator',
  templateUrl: './range-simulator.component.html',
  styleUrls: ['./range-simulator.component.css']
})
export class RangeSimulatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value: number = 100;
  options: Options = {
    floor: 1000,
    ceil: 500000
  };
  
  options2: Options = {
    floor: 12,
    ceil: 48
  };

}
