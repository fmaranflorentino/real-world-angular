import { Component, OnInit, Input } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-lead-banner',
  templateUrl: './lead-banner.component.html',
  styleUrls: ['./lead-banner.component.scss']
})
export class LeadBannerComponent implements OnInit {
  @Input()
  opts: OwlOptions;

  @Input()
  bannerItems: any;

  constructor() { }

  ngOnInit() {
  }

}
