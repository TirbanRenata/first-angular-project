import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importă CommonModule

@Component({
  selector: 'app-home-page',
  standalone: true, // Mark component as standalone
  imports: [CommonModule], // Importă CommonModule pentru a putea folosi directivele comune
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {}
