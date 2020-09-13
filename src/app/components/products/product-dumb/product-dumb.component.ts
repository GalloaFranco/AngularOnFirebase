import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '@model/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-dumb',
  templateUrl: './product-dumb.component.html',
  styleUrls: ['./product-dumb.component.css']
})
export class ProductDumbComponent implements OnInit {

  @Input() productList: Product[];
  @Output() editProductEventEmitter: EventEmitter<Product> =  new EventEmitter<Product>();
  @Output() deleteEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(readonly toastr: ToastrService) {}

  ngOnInit() {
  }

  onEditEvent(product: Product) {
    this.editProductEventEmitter.emit(product);
  }

  onDeleteEvent($key: string) {
    if (confirm('Are you sure?')) {
      this.deleteEventEmitter.emit($key);
      this.toastr.success('Successfull Operation', 'Producto eliminado', {timeOut: 1000});
    }
  }

}
