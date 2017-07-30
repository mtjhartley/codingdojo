import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductHomeComponent } from './product-home/product-home.component';

const routes: Routes = [
  { path: '', component: ProductHomeComponent, pathMatch: 'full'},
  { path: 'products', component: ProductListComponent},
  { path: 'products/new', component: ProductNewComponent},
  { path: 'products/edit/:id', component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
