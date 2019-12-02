import { Component, OnInit } from '@angular/core';

import { listStateTrigger } from 'src/app/shared/helpers/animations';
import { faBars, faTh, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { wait } from 'src/app/shared/helpers/ui.helper';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [ listStateTrigger ],
})
export class ProductsComponent implements OnInit {
  collection = [];
  faBars = faBars;
  faTh = faTh;
  faChevronDown = faChevronDown;
  showEffects: boolean;

  constructor() {
    for (let i = 1; i <= 50; i++) {
      this.collection.push('item ${i}');
    }
   }

  ngOnInit() {
    wait(500)
      .then(() => {
        this.showEffects = true;
      });
  }

}
