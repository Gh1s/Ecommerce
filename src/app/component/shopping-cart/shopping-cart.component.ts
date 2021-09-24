import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {CartService} from "../../service/cart.service";
import {Overlay, OverlayModule} from "@angular/cdk/overlay";
import {Location} from "@angular/common";
import {Product} from "../../product";
import {ProductsService} from "../../service/products.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private router: Router,
              private cartService: CartService,
              private productService: ProductsService) { }

  ngOnInit(): void {}

  items = this.cartService.getItems();

  getTotalCost() {
    return this.items.map(item => item.price).reduce((acc, value) => acc + value, 0);
  }

  deleteItems(id: number) {
    return this.cartService.removeItem(id);
  }

}
