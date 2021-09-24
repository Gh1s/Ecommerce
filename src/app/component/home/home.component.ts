import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {merge, Observable} from "rxjs";
import {Breakpoints, BreakpointObserver} from "@angular/cdk/layout";
import {filter, map, mapTo, shareReplay} from "rxjs/operators";
import {Product, PRODUCTS} from "../../product";
import {CartService} from "../../service/cart.service";
import {MatSidenav} from "@angular/material/sidenav";
import {ProductsService} from "../../service/products.service";
import {SnackbarService} from "../../service/snackbar.service";

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

  constructor(private cartService: CartService,
              private productService: ProductsService,
              private snackbarService: SnackbarService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  close(reason: string) {
    this.reason = reason;
    // @ts-ignore
    this.sidenav.close();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.snackbarService.openSnackBar('Your product has been added to the cart!', 'fermer');
  }

  addProduct(product: Product): void {
    this.productService.addProduct(product)
      .subscribe(product => {
        this.PRODUCTS.push(product);
      });
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.PRODUCTS = products);
  }

}
