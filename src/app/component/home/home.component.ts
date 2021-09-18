import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {Breakpoints, BreakpointObserver} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {Product, PRODUCTS} from "../../product";
import {CartService} from "../../service/cart.service";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isOpen: boolean = false ;
  @ViewChild('sidenav')
  sidenav: MatSidenav | undefined;
  PRODUCTS: Product[] = [];
  reason = '';

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.PRODUCTS = PRODUCTS;
  }

  close(reason: string) {
    this.reason = reason;
    // @ts-ignore
    this.sidenav.close();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }

  openShoppingCart() {
    this.isOpen = this.cartService.openShoppingCart();
  }

}
