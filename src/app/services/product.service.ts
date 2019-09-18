import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) {}

  getProducts() {
    return this.products = this.firebase.list('products');
  }

  insertProduct(product: Product) {
    this.products.push({
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
    });
  }

  updateProduct(product: Product) {
    this.products.update(product.$key, {
      name: product.name,
      category: product.category,
      location: product.location,
      price: product.price
    });
  }

  deleteProduct($key: string) {
    this.products.remove($key);
  }
}
