import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';
import { Product } from './../product';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  newProduct: Product = new Product();
  products: Array<Product>;

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {
    this._productService.productsObservable.subscribe( (products)=> {
      this.products = products;
    })
   }

  ngOnInit() {
    this.newProduct = new Product();
  }
  create() {
    if (this.newProduct.imgUrl.length < 1 ||
        this.newProduct.imgUrl === 'null' ||
        this.newProduct.imgUrl === null) {
      this.newProduct.imgUrl = null;
    }
    this.products.push(this.newProduct);
    this._productService.updateProducts(this.products);
    this.newProduct = new Product();
    this._router.navigate(['/products']);
  }

}
