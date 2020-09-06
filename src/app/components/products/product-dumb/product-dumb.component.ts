import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/product';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-dumb',
  templateUrl: './product-dumb.component.html',
  styleUrls: ['./product-dumb.component.css']
})
export class ProductDumbComponent implements OnInit {

  productList: Product[];

  constructor(readonly productService: ProductService, readonly toastr: ToastrService) {
  }

  ngOnInit() {
    this.productService.getProducts()
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
    if (confirm('Are you sure?')) {
      this.productService.deleteProduct($key);
      this.toastr.success('Successfull Operation', 'Producto eliminado', {timeOut: 1000});
    }
  }

}
