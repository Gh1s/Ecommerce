import { Injectable } from '@angular/core';
import {Product} from "../product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  isOpen: boolean | undefined;

  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  openShoppingCart() {
    this.isOpen = true;
    return this.isOpen;
  }

  closeShoppingCart() {
    this.isOpen = false
    return this.isOpen;
  }

}
