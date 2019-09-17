import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDumbComponent } from './product-dumb.component';

describe('ProductDumbComponent', () => {
  let component: ProductDumbComponent;
  let fixture: ComponentFixture<ProductDumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
