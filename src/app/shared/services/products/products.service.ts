import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProductsInterface } from './products-interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ProductsInterface {

  constructor() {
    super();
   }

  getProducts(filters?) {
    return of('');
  }

  createProduct() {}

  updateProduct() {}

}
