import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

import { ProductsInterface } from './products-interface';
import { ApiService } from '../api';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ProductsInterface {
  baseUrl = env.api.basePath;

  constructor(private api$: ApiService) {
    super();
   }

  getProducts(filters?) {
    const url = `${this.baseUrl}${env.api.domains.products.search}`;

    return this.api$.post(url, []);
  }

  getProductById(id) {
    const url = `${this.baseUrl}${env.api.domains.products.byId.replace('{id}', id)}`;

    return this.api$.get(url);
  }

  createProduct() {}

  updateProduct() {}

}
