import { Injectable } from '@angular/core';
import { Product } from './product';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ProductsRef: AngularFireList<any>;
  ProductRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }
   /* Create book */
   AddProduct(product: Product) {
    this.ProductsRef.push({
      product_name: product.product_name,
      product_price: product.product_price,
      product_category: product.product_category,
      product_availability: product.product_availability,
      product_description: product.product_description,
      Brand: product.Brand,
      Model: product.Model,
      Features: product.Features,
      Processor_Type: product.Processor_Type,
      Processor_Speed: product.Processor_Speed,
      CPU_Socket_Type: product.CPU_Socket_Type,
      Assembled_Product_Dimensions_L_x_W_x_H: product.Assembled_Product_Dimensions_L_x_W_x_H,
      RAM_Memory: product.RAM_Memory,
      Compatible_Devices: product.Compatible_Devices,
      Internal_External: product.Internal_External,
      storage_device_Type: product.storage_device_Type,
      Capacity: product.Capacity,
      Interface: product.Interface,
      Data_Encryption_Support: product.Data_Encryption_Support,
      Operating_System_Compatibility: product.Operating_System_Compatibility,
      Limited_Warranty: product.Limited_Warranty,
      color : product.color,
      Motherboard_Form_Factor: product.Motherboard_Form_Factor,
      Maximum_RAM_Supported: product.Maximum_RAM_Supported,
      RAM: product.RAM,
      Power_Type: product.Power_Type,
      Watts: product.Watts
    //in_stock: product.in_stock,
    //languages: product.languages
    })
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  /* Get book */
  GetProduct(id: string) {
    this.ProductRef = this.db.object('product-list/'+id);
    return this.ProductRef;
  }  

  /* Get book list */
  GetProductList() {
    this.ProductsRef = this.db.list('product-list');
    return this.ProductsRef;
  }

  /* Update book */
  UpdateProduct(id, product: Product) {
    this.ProductRef.update({
      product_name: product.product_name,
      product_price: product.product_price,
      product_category: product.product_category,
      product_availability: product.product_availability,
    })
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  /* Delete book */
  DeleteProduct(id: string) {
    this.ProductRef = this.db.object('product-list/' + id);
    this.ProductRef.remove()
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  // Error management
  private errorMgmt(error) {
    console.log(error)
  }
}

