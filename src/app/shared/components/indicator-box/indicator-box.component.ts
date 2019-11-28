import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-indicator-box',
  templateUrl: './indicator-box.component.html',
  styleUrls: ['./indicator-box.component.scss']
})
export class IndicatorBoxComponent implements OnInit {
  @Input()
  indicators: any[];

  constructor() { }

  ngOnInit() {
  }

}
