import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsQRCategoryComponent } from './products-qrcategory.component';

describe('ProductsQRCategoryComponent', () => {
  let component: ProductsQRCategoryComponent;
  let fixture: ComponentFixture<ProductsQRCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsQRCategoryComponent]
    });
    fixture = TestBed.createComponent(ProductsQRCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
