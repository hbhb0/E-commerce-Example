import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCreationComponent } from './products-creation.component';

describe('ProductsCreationComponent', () => {
  let component: ProductsCreationComponent;
  let fixture: ComponentFixture<ProductsCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
