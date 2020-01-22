import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products/products.service';

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
  priceRangeList;
  paginationState = {
    currentPage: 1,
    pageSize: 10,
  };
  errorGetProducts: boolean;

  constructor(
    private productsService: ProductsService,
  ) {
  }

  ngOnInit() {
    this.loadingProducts = true;

    this.getPriceRange()
      .then((range) => {
        this.priceRangeList = range;
      });

    this.getAllProducts({ PageNumber: 1, PageSize: 10, orderDesc: true })
      .then((products) => {
        this.collection = products.items;
        this.loadingProducts = false;
      })
      .catch((error) => {
        this.errorGetProducts = true;
        this.loadingProducts = false;
      });


    wait(500)
      .then(() => {
        this.showEffects = true;
      });

  }

  getAllProducts(filters?): Promise<any> {
    if (filters && filters.pageNumber) {
      this.paginationState.currentPage = filters.pageNumber;
    }
    return new Promise((resolve, reject) => {
      this.productsService
        .getProducts(filters)
        .subscribe(response => resolve(response), error => reject(error));
    });
  }

  getPriceRange(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.productsService
        .getPriceRange()
        .subscribe(response => resolve(response), error => reject(error));
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
