import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; // pentru a prelua parametrii din URL


// Definirea unui tip pentru produs
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

@Component({
    selector: 'app-product-detail',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;  // Aici vom salva produsul selectat
  cart: Product[] = [];  // Coșul de cumpărături (simplificat)

  products = [
    {
       id: 1,
      name: 'Sirop de Catina si Macese',
      description: 'Pentru relaxare și combaterea insomniilor.',
      price: '30',
      image: 'assets/images/Siropuri/Sirop de Catina si Macese.jpeg' 
    },
    { id: 2, name: 'Sirop de Coacaze Negre', description: 'Pentru relaxare și combaterea insomniilor.', price: '30', image: 'assets/images/Siropuri/Sirop de Coacaze Negre.jpeg' },
    { id: 3, name: 'Sirop de Muguri de Brad', description: 'Pentru relaxare și combaterea insomniilor.', price: '30', image: 'assets/images/Siropuri/Sirop de Muguri de Brad.jpeg' },
    { id: 4, name: 'Sirop de Muguri de pin, Limba Cerbului, Patlagina si Cimbrisor', description: 'Pentru relaxare și combaterea insomniilor.', price: '30', image: 'assets/images/Siropuri/Sirop de Muguri de pin,Limba Cerbului,Patlagina si Cimbrisor.jpeg' }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    console.log('ID-ul preluat din URL:', productId); // Verifică ce ID preia
    this.product = this.products.find(p => p.id === productId);
    console.log('Produs găsit:', this.product); // Verifică ce produs ai găsit
  
    if (!this.product) {
      console.log('Produsul nu a fost găsit');
    }
  }
  

  addToCart(product: Product | undefined): void {
    // Verificăm dacă produsul este definit înainte de a-l adăuga în coș
    if (product) {
      this.cart.push(product);  // Adăugăm produsul în coș
      console.log('Produs adăugat în coș', this.cart);
    } else {
      console.log('Produsul nu este definit!');
    }
  }
}
