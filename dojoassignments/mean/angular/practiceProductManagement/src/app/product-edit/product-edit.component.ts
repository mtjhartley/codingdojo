import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router'; //need activated route for url parameter, router for redirecting!
import { Product } from '../Product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  products: Array<Product>; //force products to be an array of our class Product
  product: Product; //make sure it knows product variable is an instance of our class Product


  constructor(
    private _route: ActivatedRoute, //route for param and selecting the product
    private _productService: ProductService, //necessary for subscribing to the product and updating it!
    private _router: Router, // necessary for redirecting after a successful update or delete!
  ) {
    this._productService.productsObservable.subscribe( (products)=> { this.products = products;}) //subscribe to the observable, and update our copy of products
    
    this._route.params.subscribe( param => {
      for (let idx=0; idx < this.products.length; idx++){
        if (this.products[idx].id == param.id) {
          this.product = this.products[idx]
          break;
        }
      }
    })
   }
  this

  ngOnInit() {
  }
  update() {
    this._productService.updateProducts(this.products);
    this._router.navigate(['/products'])
  }

}
