import { Injectable } from '@angular/core';
import { Product } from './product'; //need to import Product because we are limiting what our array can contain
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductService {
  productsObservable = new BehaviorSubject(null);

  constructor() { }

  updateProducts(products: Array<Product>) {
    this.productsObservable.next(products); // referencing the parameter products, don't be confused by : Array<Product>
  }

}
