import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.productsObservable.subscribe( (products) => {
      this.products = products;
    })
  }
  deleteProduct(product) {
    const idx = this.products.indexOf(product);
    this.products.splice(idx, 1);
    this._productService.updateProducts(this.products);
  }

}
