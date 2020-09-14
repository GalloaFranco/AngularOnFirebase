import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsSmartComponent } from '@component/products/product-smart/products-smart.component';
import { ProductFormComponent } from '@component/products/product-form/product-form.component';
import { ProductDumbComponent } from '@component/products/product-dumb/product-dumb.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsSmartComponent,
    ProductFormComponent,
    ProductDumbComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],
  exports: [
    ProductsSmartComponent
  ]
})
export class ProductsModule { }
