import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProductsInterface } from './products-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ProductsInterface {

  constructor() {
    super();
   }

  getProducts(filters?): Observable<any> {}

  createProduct(): Observable<any> {}

  updateProduct(): Observable<any> {}

}
