import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexBodyComponent } from './components/index-body/index-body.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/Authentification/login/login.component';
import { SingUpComponent } from './components/Authentification/sing-up/sing-up.component';
import { ProductsCategoryComponent } from './components/Shop/products-category/products-category.component';
import { ProductDetailsComponent } from './components/Shop/product-details/product-details.component';
import { ProductCheckoutComponent } from './components/Shop/product-checkout/product-checkout.component';
import { ProductConfirmationComponent } from './components/Shop/product-confirmation/product-confirmation.component';
import { ShoppingCartComponent } from './components/Shop/shopping-cart/shopping-cart.component';

//import { AngularFireDatabase } from '@angular/fire/database/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AuthentificationComponent } from './Admin/authentification/authentification.component';
import { ProductsCreationComponent } from './Admin/products-creation/products-creation.component';
import { ProductsViewComponent } from './Admin/products-view/products-view.component';
import { ProductsManagementComponent } from './Admin/products-management/products-management.component';

//Crud service
import { ProductService } from './shared/product.service';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { EditProductComponent } from './Admin/edit-product/edit-product.component';
import { ProductListComponent } from './Admin/product-list/product-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexBodyComponent,
    ContactComponent,
    LoginComponent,
    SingUpComponent,
    ProductsCategoryComponent,
    ProductDetailsComponent,
    ProductCheckoutComponent,
    ProductConfirmationComponent,
    ShoppingCartComponent,
    AuthentificationComponent,
    ProductsCreationComponent,
    ProductsViewComponent,
    ProductsManagementComponent,
    AddProductComponent,
    EditProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    

 
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
