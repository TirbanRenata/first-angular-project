import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service'; // Importă serviciul
import { Product } from '../models/product.model';  // Calea relativă către model

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: 'Tinctură de propolis', description: 'Tinctură naturală', price: 30,stock: 40 },
    { id: 2, name: 'Ceai verde', description: 'Ceai antioxidant', price: 20, stock: 40 }
  ];
  

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Apelează serviciul pentru a obține produsele
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
