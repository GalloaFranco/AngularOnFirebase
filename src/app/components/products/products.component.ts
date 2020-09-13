import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '@services/products/product.service';
import { Subscription } from 'rxjs';
import { Product } from '@model/product';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  productList: Product[];
  productsSubscription: Subscription;

  constructor(readonly productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsSubscription = this.productService.getProducts()
      .snapshotChanges()
      .subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          const product = element.payload.toJSON();
          product['$key'] = element.key;
          this.productList.push(product as Product);
        });
      });
  }

  onEdit(product: Product) {
    this.productService.selectedProduct = Object.assign({}, product);
  }

  onDelete($key: string) {
      this.productService.deleteProduct($key);
  }

  onSubmit(product: Product) {
    if (product.$key == null) {
      this.productService.insertProduct(product);
    } else {
      this.productService.updateProduct(product);
    }
    this.resetForm();
  }

  resetForm() {
      this.productService.selectedProduct = new Product();
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }

}
