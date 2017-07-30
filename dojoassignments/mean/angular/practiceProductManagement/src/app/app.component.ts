import { Component } from '@angular/core';
import { Product } from './product'; //import our Product class to work with
import { ProductService } from './product.service'; //import our service(observable) for subscribing!
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Products Manager Attempt #2';

  products = [
    new Product(1, 'DSLR Camera', 1499.99, '../../assets/camera.jpg'),
    new Product(2, 'iLaptop', 1299.99, '../../assets/laptops.jpg')
  ];

  constructor(private _productService: ProductService) {
    this._productService.updateProducts(this.products); // when constructed, update the observable to this list of products.
    this._productService.productsObservable.subscribe( (products) => { this.products = products; })
    //create a subscription directly on the productsObservable inside the _productService,
    //such that our list of products changes whenever the productsObservable is updated!
  }
}
