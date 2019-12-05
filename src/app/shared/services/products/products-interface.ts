import { Observable } from 'rxjs';

export abstract class ProductsInterface {

    constructor() { }

    abstract getProducts(filters?);

    abstract createProduct();
    
    abstract updateProduct();
}