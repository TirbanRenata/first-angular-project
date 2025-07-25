import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { TincturiComponent } from './products/tincturi/tincturi.component';
import { CeaiuriComponent } from './products/ceaiuri/ceaiuri.component';
import { SiropuriComponent } from './products/siropuri/siropuri.component';  
import { CremeComponent } from './products/creme/creme.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'; 
import { AboutUsComponent } from './about-us/about-us.component';
import { RightPanelComponent } from './right-panel/right-panel.component';


const routes: Routes = [
  { path: 'homepage', component: HomePageComponent },
  { path: 'tincturi', component: TincturiComponent },
  { path: 'siropuri', component: SiropuriComponent },
  { path: 'creme', component: CremeComponent },

  { path: 'ceaiuri', component: CeaiuriComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },  // Redirectează la homepage dacă nu există o rută specificată
  { path: 'cart', component: CartComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  {path: 'about-us',component:AboutUsComponent},
  {path:'right-panel',component:RightPanelComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes) ,CommonModule],
  exports: [RouterModule],


})
export class AppModule { }
