import { TestBed } from '@angular/core/testing';
import {AngularFireDatabase} from 'angularfire2/database';
import { ProductService } from './product.service';

describe('ProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: AngularFireDatabase}
    ]
  }));

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });
});
