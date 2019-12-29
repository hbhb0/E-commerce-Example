import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { ProductService } from './../../shared/product.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export interface description {
  name: string;
}

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  descriptionArray: description[] = [];
  @ViewChild('chipList',{static:true}) chipList;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  selectedBindingType: string;
  editProductForm: FormGroup;
  CategoryType: any = 
  ['Processors_CPU',
  'Storage',
  'Graphic Cards',
  'Memory Upgrades',
  'Cases & Towers',
  'Motherboards',
  'Fans, Heatsinks & Cooling',
  'Computer Power Supplies'];

  ngOnInit() {
    this.updateProductForm();
  }

  constructor(
    public fb: FormBuilder,    
    private location: Location,
    private ProductApi: ProductService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.ProductApi.GetProduct(id).valueChanges().subscribe(data => {
      //this.descriptionArray = data.describtions;
      this.editProductForm.setValue(data);
      console.log(data);
    })
  }

  /* Update form */
  updateProductForm() {
    
    this.editProductForm = this.fb.group({
      product_name: ['', [Validators.required]],
      product_price: ['', [Validators.required]],
      product_category: ['', [Validators.required]],
      product_availability: ['Yes']

    });
  }
  /* Add language */
/*  add(event: MatChipInputEvent): void {
    var input: any = event.input;
    var value: any = event.value;
    // Add language
    if ((value || '').trim()) {
      this.descriptionArray.push({name: value.trim()});
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }*/

  /* Remove language */
/*  remove(describtions: any): void {
    const index = this.descriptionArray.indexOf(describtions);
    if (index >= 0) {
      this.descriptionArray.splice(index, 1);
    }
  }*/

  /* Get errors */
  
  public handleError = (controlName: string, errorName: string) => {
    return this.editProductForm.controls[controlName].hasError(errorName);
  }

  /* Date */
  /*
  formatDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.editProductForm.get('publication_date').setValue(convertDate, {
      onlyself: true
    })
  }*/

  /* Go to previous page */
  goBack(){
    this.location.back();
  }

  /* Submit book */
  updateProduct() {
    var id = this.actRoute.snapshot.paramMap.get('id');
    if(window.confirm('Are you sure you wanna update?')){
        this.ProductApi.UpdateProduct(id, this.editProductForm.value);
      this.router.navigate(['product-list']);
    }
  }

}