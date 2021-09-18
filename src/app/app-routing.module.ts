import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./component/home/home.component";
import {SignInComponent} from "./component/sign-in/sign-in.component";
import {ShoppingCartComponent} from "./component/shopping-cart/shopping-cart.component";
import {ProductDetailComponent} from "./component/product-detail/product-detail.component";


const routes: Routes = [
  { path: 'products', component: HomeComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'authentication', component: SignInComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: '', component: SignInComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
