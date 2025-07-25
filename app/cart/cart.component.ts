import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems(); // Obține articolele din coș
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }
}
