import { Component, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { ProductService } from '../../shared/product.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Processors } from '../../shared/Processors';

export interface description {
  name: string;
}
export interface DetailedDescription{
  details: string;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  inputFields: any[]=[];
  values :any;
  clicked = false;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  descriptionArray: any;
  @ViewChild('chipList',{static:true}) chipList;
  @ViewChild('chipList2',{static:true}) chipList2;
  @ViewChild('resetBookForm',{static:true}) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  selectedBindingType: string;
  productForm: FormGroup;
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
    this.productApi.GetProductList();
    this.submitProductForm();
  }

  constructor(
    public fb: FormBuilder,
    private productApi: ProductService
  ) { }

  onClickMe(CategoryType:any)
  {
    this.clicked = true;
    this.inputFields = [""];
    this.values = '';
    this.values = CategoryType;
    console.log(this.values);
    switch (this.values){
      case "Processors_CPU":
        
        this.inputFields = ["Brand",
          "Model",
          "Processor_Type",
          "Features",
          "Processor_Type",
          "Processor_Speed",
          "CPU_Socket_Type",
          "Assembled_Product_Dimensions_L_x_W_x_H"];
          break;
      case "Storage":
        
        this.inputFields = [
          "Brand",
          "Model",
          "Internal_External",
          "storage_device_Type",
          "Capacity",
          "Interface",
          "Data_Encryption_Support",
          "Operating_System_Compatibility",
          "Limited_Warranty",
          "Assembled_Product_Dimensions_L_x_W_x_H"
        
        ];
        break;
        case "Graphic Cards":
          this.inputFields = [
            "Brand",
            "Model",
            "RAM",
            "Assembled_Product_Dimensions_L_x_W_x_H"
          ];
        break;
        case "Memory Upgrades":
          this.inputFields = [
            "Brand",
            "Model",
            "RAM_Memory",
            "Compatible_Devices",
            "Assembled_Product_Dimensions_L_x_W_x_H"
          ];
          break;
        case "Cases & Towers":
          this.inputFields = [
            "Brand",
            "Model",
            "Motherboard_Form_Factor",
            "color",
            "Assembled_Product_Dimensions_L_x_W_x_H"
          ];
          break;
        case "Motherboards":
          this.inputFields = [
            "Brand",
            "Model",
            "CPU_Socket_Type",
            "Motherboard_Form_Factor",
            "Maximum_RAM_Supported",
            "Assembled_Product_Dimensions_L_x_W_x_H"
          ];
          break;
          case "Fans, Heatsinks & Cooling":
            this.inputFields = [
              "Brand",
              "Model",
              "Power_Type",
              "Assembled_Product_Dimensions_L_x_W_x_H"
            ];
            break;
            case "Computer Power Supplies":
              this.inputFields = [
                "Brand",
                "Model",
                "Watts",
                "Assembled_Product_Dimensions_L_x_W_x_H"
              ];
              break;
        
      
    }
    console.log(this.inputFields); 

  }

  /* Remove dynamic descriptions 
  remove(describ: description): void {
    const index = this.descriptionArray.indexOf(describ);
    if (index >= 0) {
      this.descriptionArray.splice(index, 1);
    }
  }*/

  /* Reactive product form */
  submitProductForm() {
    this.productForm = this.fb.group({
      product_name: ['', [Validators.required]],
      product_price: ['', [Validators.required]],
      product_category: ['', [Validators.required]],
      product_availability: ['Yes'],
      product_description: ['', [Validators.required]],
      Brand: [],
      Model: [],
      Features: [],
      Processor_Type: [],
      Processor_Speed: [],
      CPU_Socket_Type: [],
      Assembled_Product_Dimensions_L_x_W_x_H: [],
      RAM_Memory: [],
      Compatible_Devices: [],
      Internal_External: [],
      storage_device_Type: [],
      Capacity: [],
      Interface: [],
      Data_Encryption_Support: [],
      Operating_System_Compatibility: [],
      Limited_Warranty: [],
      color: [],
      Motherboard_Form_Factor: [],
      Maximum_RAM_Supported: [],
      RAM: [],
      Power_Type: [],
      Watts: []
    });
    
    
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.productForm.controls[controlName].hasError(errorName);
  }
  items = "";
  /* Add dynamic description 
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add description
    if ((value || '').trim() && this.descriptionArray.length < 5) {
      this.descriptionArray.push({ name: value.trim() })
      console.log(this.items);
    }
    //Add detailed ddescription
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  */
  /* Date */
  /*
  formatDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.productForm.get('publication_date').setValue(convertDate, {
      onlyself: true
    })
  }
*/
  /* Reset form */
  resetForm() {
    this.descriptionArray = [];
    this.productForm.reset();
    Object.keys(this.productForm.controls).forEach(key => {
      this.productForm.controls[key].setErrors(null)
    });
  }

  /* Submit book */
  submitProduct() {
    console.log(this.productForm);
    if (this.productForm.valid){
      this.productApi.AddProduct(this.productForm.value)
      this.resetForm();
    }
  }

}