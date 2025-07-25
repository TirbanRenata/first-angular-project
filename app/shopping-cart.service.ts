import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cartItems: any[] = []; // Vom stoca articolele din coș aici

  constructor() { }

  // Adaugă un produs în coș
  addToCart(product: any): void {
    this.cartItems.push(product);
  }

  // Obține toate articolele din coș
  getCartItems(): any[] {
    return this.cartItems;
  }

  // Obține numărul total de articole din coș
  getCartCount(): number {
    return this.cartItems.length;
  }

  // Șterge toate articolele din coș
  clearCart(): void {
    this.cartItems = [];
  }
}
