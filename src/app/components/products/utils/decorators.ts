import { EventEmitter } from '@angular/core';
import { Product } from '@model/product';


export function ProductFormEmittersInit(constructor: Function) {
  console.log(constructor.prototype.name);
  constructor.prototype.submitEventEmitter = new EventEmitter<Product>();
  constructor.prototype.resetEventEmitter = new EventEmitter<void>();
  constructor.prototype.getProductsEventEmitter = new EventEmitter<void>();
}
