import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { IndexBodyComponent } from './components/index-body/index-body.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/Authentification/login/login.component';
import { SingUpComponent } from './components/Authentification/sing-up/sing-up.component';
import { ShoppingCartComponent } from './components/Shop/shopping-cart/shopping-cart.component';
import { ProductsCategoryComponent } from './components/Shop/products-category/products-category.component';
import { ProductDetailsComponent } from './components/Shop/product-details/product-details.component';
import { ProductCheckoutComponent } from './components/Shop/product-checkout/product-checkout.component';
import { ProductConfirmationComponent } from './components/Shop/product-confirmation/product-confirmation.component';
import { AuthentificationComponent } from './Admin/authentification/authentification.component';
import { ProductsCreationComponent } from './Admin/products-creation/products-creation.component';
import { ProductsManagementComponent } from './Admin/products-management/products-management.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { EditProductComponent } from './Admin/edit-product/edit-product.component';
import { ProductListComponent } from './Admin/product-list/product-list.component';

const routes: Routes = [
  {path: '', component: IndexBodyComponent },
  {path: 'contact', component: ContactComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'SignUp', component: SingUpComponent},
  {path: 'Cart', component: ShoppingCartComponent},
  {path: 'productsDisplay', component: ProductsCategoryComponent},
  {path: 'ProductDetails/:id', component: ProductDetailsComponent},
  {path: 'ProductCheckOut', component: ProductCheckoutComponent},
  {path: 'ProductConfirmation', component: ProductConfirmationComponent},
  {path: 'AuthAdmin', component: AuthentificationComponent},
  {path: 'AdminProductCreation', component: ProductsCreationComponent},
  {path: 'ProductManagement', component: ProductsManagementComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: 'edit-product/:id', component: EditProductComponent},
  {path: 'product-list', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
