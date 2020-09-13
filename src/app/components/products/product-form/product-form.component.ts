import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '@services/products/product.service';
import { NgForm } from '@angular/forms';
import { Product } from '@model/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Output() submitEventEmitter: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() resetEventEmitter: EventEmitter<void> = new EventEmitter<void>();
  @Output() getProductsEventEmitter: EventEmitter<void> = new EventEmitter<void>();

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
