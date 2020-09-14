import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSmartComponent } from './products-smart.component';

describe('ProductsComponent', () => {
  let component: ProductsSmartComponent;
  let fixture: ComponentFixture<ProductsSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
