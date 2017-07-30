import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProductService } from './product.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductHomeComponent } from './product-home/product-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductEditComponent,
    ProductNewComponent,
    ProductListComponent,
    ProductHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
