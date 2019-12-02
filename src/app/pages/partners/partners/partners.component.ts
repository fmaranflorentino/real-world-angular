import { Component, OnInit } from '@angular/core';

import { faBars, faTh, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  collection = [];
  faBars = faBars;
  faTh = faTh;
  faChevronDown = faChevronDown;

  constructor() { 
    for (let i = 1; i <= 50; i++) {
      this.collection.push('item ${i}');
    }
  }

  ngOnInit() {
  }

}
