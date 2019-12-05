import { Observable } from 'rxjs';

export abstract class ProductsInterface {

    constructor() { }

    abstract getProducts(filters?): Observable<T>;

    abstract createProduct(): Observable<T>;
    
    abstract updateProduct(): Observable<T>;
}