import { Component, OnInit } from '@angular/core';

import { listStateTrigger, fadeIn } from 'src/app/shared/helpers/animations';
import { faBars, faTh, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { wait } from 'src/app/shared/helpers/ui.helper';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [listStateTrigger, fadeIn],
})
export class ProductsComponent implements OnInit {
  collection = [];
  faBars = faBars;
  faTh = faTh;
  faChevronDown = faChevronDown;
  showEffects: boolean;
  loadingProducts = false;

  constructor() {
    for (let i = 1; i <= 50; i++) {
      this.collection.push(i);
    }
  }

  ngOnInit() {
    this.loadingProducts = true;

    wait(500)
      .then(() => {
        this.showEffects = true;
      });

    wait(3000)
      .then(() => {
        this.loadingProducts = false;
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
