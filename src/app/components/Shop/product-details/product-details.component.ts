import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/app/shared/product';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  dataSource: MatTableDataSource<Product>;
  ProductData: any = [];
  ProductTechnicalFileDescriptions: any = [];
  ProductTechnicalFileDetails: any = [];
  
  constructor(private ProductApi: ProductService,private actRoute: ActivatedRoute){
    var x;
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.ProductApi.GetProduct(id).valueChanges().subscribe(data => {
      //this.descriptionArray = data.describtions;
      this.ProductData.push(data);
      for (x in data)
      {
        this.ProductTechnicalFileDescriptions.push(x);
        this.ProductTechnicalFileDetails.push(data[x]);
      }
    })
  }
  

  ngOnInit() {

  }

}
