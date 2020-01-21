import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-simulator-modal',
  templateUrl: './simulator-modal.component.html',
  styleUrls: ['./simulator-modal.component.scss']
})
export class SimulatorModalComponent implements OnInit {
  value = 32;
  options: Options = {
    floor: 1,
    ceil: 48
  };

  constructor() { }

  ngOnInit() {
  }

}
