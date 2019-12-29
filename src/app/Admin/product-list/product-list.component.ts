import { Product } from './../../shared/product';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ProductService } from './../../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  
  dataSource: MatTableDataSource<Product>;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  ProductData: any = [];
  displayedColumns: any[] = [
    '$key',
    'Product_name',
    'Product_Price', 
    'product_category',
    'product_availability',
    'action'
  ];
  
  constructor(private ProductApi: ProductService){
    this.ProductApi.GetProductList()
    .snapshotChanges().subscribe(Product => {
      Product.forEach(item => {
          let a = item.payload.toJSON();
          a['$key'] = item.key;
          this.ProductData.push(a as Product)
        })
        /* Data table */
        this.dataSource = new MatTableDataSource(this.ProductData);
        /* Pagination */
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
        }, 0);
    })
  }

  /* Delete */
  deleteProduct(index: number, e){
    if(window.confirm('Are you sure?')) {
      //const data = this.dataSource.data;
      //data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      //this.dataSource.data = data;
      this.ProductApi.DeleteProduct(e.$key)
    }
  }
  
}