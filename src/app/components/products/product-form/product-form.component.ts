import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '@services/products/product.service';
import { NgForm } from '@angular/forms';
import { Product } from '@model/product';

function ProductFormEmittersInit(constructor: Function) {
  console.log(constructor.prototype.name);
  constructor.prototype.submitEventEmitter = new EventEmitter<Product>();
  constructor.prototype.resetEventEmitter = new EventEmitter<void>();
  constructor.prototype.getProductsEventEmitter = new EventEmitter<void>();
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
@ProductFormEmittersInit
export class ProductFormComponent implements OnInit {

  @Output() submitEventEmitter: EventEmitter<Product>;
  @Output() resetEventEmitter: EventEmitter<void>;
  @Output() getProductsEventEmitter: EventEmitter<void>;

  constructor(readonly productService: ProductService) {}

  ngOnInit() {
    this.getProductsEventEmitter.emit();
    this.resetFormEvent();
  }

  onSubmitEvent(productForm: NgForm) {
    this.submitEventEmitter.emit(productForm.value);
    this.resetFormEvent(productForm);
  }

  resetFormEvent(productForm?: NgForm) {
    if (productForm != null) {
      productForm.resetForm();
      this.resetEventEmitter.emit();
    }
  }
}
