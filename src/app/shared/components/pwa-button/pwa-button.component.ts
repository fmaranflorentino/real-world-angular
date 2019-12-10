import { Component, OnInit } from '@angular/core';

import { faSplotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pwa-button',
  templateUrl: './pwa-button.component.html',
  styleUrls: ['./pwa-button.component.scss']
})
export class PwaButtonComponent implements OnInit {
  faSplotch = faSplotch;

  constructor() { }

  ngOnInit() {
  }

}
