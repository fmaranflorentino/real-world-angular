import { Component, OnInit } from '@angular/core';

import { listStateTrigger, fadeIn } from 'src/app/shared/helpers/animations';
import { faBars, faTh, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { wait } from 'src/app/shared/helpers/ui.helper';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
  animations: [listStateTrigger, fadeIn],
})
export class PartnersComponent implements OnInit {
  collection = [];
  faBars = faBars;
  faTh = faTh;
  faChevronDown = faChevronDown;
  showEffects: boolean;
  loadingPartners = false;


  constructor() { 
    for (let i = 1; i <= 50; i++) {
      this.collection.push('item ${i}');
    }
  }

  ngOnInit() {
    this.loadingPartners = true; 
    
    wait(500)
    .then(() => {
      this.showEffects = true;
    });

  wait(3000)
    .then(() => {
      this.loadingPartners = false;
    });
  }

  generateArray(count: number): Array<number> {
    const indexes = [];
    for (let i = 0; i < count; i++) {
      indexes.push(i);
    }
    return indexes;
  }

}
