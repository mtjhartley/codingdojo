import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service'; //import the service, note the ..
import { Product } from './../product'; //import our class, from a folder up
import { Router } from '@angular/router'; //this will allow us to redirect after we create a new product!

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  newProduct: Product = new Product(); //create a new instance of our Product class;
  products: Array<Product>; //enforce that products will be an array of only Product instances. 

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {
    this._productService.productsObservable.subscribe( (products) => {this.products = products})
   }
  //add product service and the router to our constructor
  //when constructed, we will subscribe to the productObservable! 

  ngOnInit() {
    this.newProduct = new Product(); //instantitate a new Product when we initiate, is this redundant?
  }

  create() {
    this.products.push(this.newProduct) //push our new product to the list
    this._productService.updateProducts(this.products) //update our list of products!
    this.newProduct = new Product(); //reassign the memory to a new instance of product
    this._router.navigate(['/products']) //redirect us the the products page!
  }

}
