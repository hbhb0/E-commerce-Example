import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/product.service';
import { MatTableDataSource } from '@angular/material';

import { Product } from '../../../shared/product';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {

  dataSource: MatTableDataSource<Product>;
  ProductsData: any = [];
  ProductData2: any = [];
  constructor(private ProductApi: ProductService){
    this.ProductApi.GetProductList()
    .snapshotChanges().subscribe(Product => {
      Product.forEach(item => {
          let a = item.payload.toJSON();
          a['$key'] = item.key;
        
          this.ProductsData.push(a)
        })
        this.dataSource = new MatTableDataSource(this.ProductsData);
    })
  }


  ngOnInit() {
    
  }

}
