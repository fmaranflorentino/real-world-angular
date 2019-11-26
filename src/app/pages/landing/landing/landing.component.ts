import { Component, OnInit } from '@angular/core';

import { bannerOptions, differentialOptions, productsOptions, storesOptions } from './carousel-options';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  bannerOpts = bannerOptions;
  differentialOpts = differentialOptions;
  productsOpts = productsOptions;
  storesOpts = storesOptions;

  value = 100;
  options: Options = {
    floor: 1000,
    ceil: 500000
  };

  options2: Options = {
    floor: 12,
    ceil: 48
  };

  constructor() { }

  ngOnInit() {
  }

}
