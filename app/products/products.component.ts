import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Ceaiuri', description: 'Ceaiuri naturale pentru relaxare și sănătate.' },
    { id: 2, name: 'Tincturi', description: 'Tincturi din plante medicinale.' },
    { id: 3, name: 'Creme', description: 'Creme naturale pentru îngrijirea pielii.' },
    { id: 4, name: 'Siropuri', description: 'Siropuri pentru întărirea imunității.' }
  ];
}
