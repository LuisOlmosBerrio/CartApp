import { Injectable } from '@angular/core';
import { Products } from './Interfaces/Products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Products[] = [];

  constructor() {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  addToCart(product: Products) {
    this.cart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCart() {
    return this.cart;
  }

  removeProduct(product: Products) {
    const index = this.cart.findIndex((item) => item.id === product.id);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  clearCart() {
    this.cart = [];
  }
}
