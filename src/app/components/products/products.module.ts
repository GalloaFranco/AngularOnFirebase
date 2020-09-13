import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from '@component/products/products.component';
import { ProductFormComponent } from '@component/products/product-form/product-form.component';
import { ProductDumbComponent } from '@component/products/product-dumb/product-dumb.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductFormComponent,
    ProductDumbComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
