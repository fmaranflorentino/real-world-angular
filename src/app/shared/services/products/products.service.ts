import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

    let params;

    if (filters) {
      params = this.toHttpParams(filters);
    }

    return this.api$.post(url, [], {params});
  }

  getProductById(id) {
    const url = `${this.baseUrl}${env.api.domains.products.byId.replace('{id}', id)}`;

    return this.api$.get(url);
  }

  getPriceRange() {
    const url = `${this.baseUrl}${env.api.domains.products.priceRange}`;

    return this.api$.get(url);
  }

  toHttpParams(obj: Object): HttpParams {
    let params = new HttpParams();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const val = obj[key];

        if (val instanceof Array) {
          for (let i = 0; i < val.length; i++) {
            params = params.append(key, val[i].toString());
          }
        } else if (val !== null && val !== undefined && val !== '') {
          params = params.append(key, val.toString());
        }
      }
    }
    return params;
  }

  createProduct() { }

  updateProduct() { }

}
