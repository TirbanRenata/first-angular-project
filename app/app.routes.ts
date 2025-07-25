import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './products/products.component';
import { TincturiComponent } from './products/tincturi/tincturi.component';
import { CeaiuriComponent } from './products/ceaiuri/ceaiuri.component';
import { SiropuriComponent } from './products/siropuri/siropuri.component';
import { CremeComponent } from './products/creme/creme.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component'; 
import { AboutUsComponent } from './about-us/about-us.component';
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'tincturi', component: TincturiComponent },
  { path: 'creme', component: CremeComponent },
  { path: 'siropuri', component: SiropuriComponent },
  { path: 'ceaiuri', component: CeaiuriComponent },
  { path: 'product-detail', component: ProductDetailComponent },  // Modificată ruta
  { path: 'cart', component: CartComponent },
  {path: 'about-us',component:AboutUsComponent}

];
