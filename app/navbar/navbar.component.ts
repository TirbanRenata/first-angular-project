import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service'; // Importă serviciul

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'] // corectat aici
})
export class NavbarComponent implements OnInit {
  cartItemCount: number = 0;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.cartItemCount = this.cartService.getCartCount(); // Obține numărul de articole din coș
  }
}
