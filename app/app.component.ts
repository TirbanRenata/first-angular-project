import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importă RouterModule

import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TincturiComponent } from './products/tincturi/tincturi.component'; 
import { CeaiuriComponent } from './products/ceaiuri/ceaiuri.component';

const routes = [
  { path: 'homepage', component: HomePageComponent },
  { path: 'tincturi', component: TincturiComponent },
  { path: 'ceaiuri', component: CeaiuriComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, TincturiComponent, CeaiuriComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'My Angular App';

}
