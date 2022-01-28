import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {merge, Observable} from "rxjs";
import {Breakpoints, BreakpointObserver} from "@angular/cdk/layout";
import {filter, map, mapTo, shareReplay} from "rxjs/operators";
import {Product, PRODUCTS} from "../../product";
import {CartService} from "../../service/cart.service";
import {MatSidenav} from "@angular/material/sidenav";
import {ProductsService} from "../../service/products.service";
import {SnackbarService} from "../../service/snackbar.service";
import {Router} from "@angular/router";

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
  centered = true;
  cols!: number;

  gridByBreakpoint = {
    xl: 4,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1
  }

  constructor(private cartService: CartService,
              private productService: ProductsService,
              private snackbarService: SnackbarService,
              private router: Router,
              private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
        }
      }
    });
  }

  ngOnInit(): void {
    this.getProducts();
    //this.breakpoint = (window.innerWidth > 400) ? 4 : 1;
  }

  close(reason: string) {
    this.reason = reason;
    // @ts-ignore
    this.sidenav.close();
  }

  addProduct(product: Product): void {
    this.productService.addProduct(product)
      .subscribe(product => {
        this.PRODUCTS.push(product);
      });
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.PRODUCTS = products) ;
  }

  getAccessories(): void {
    this.productService.getProducts()
      .subscribe(products => this.PRODUCTS = products.filter(p => p.family === "accessoires")) ;
  }

  getHousing(): void {
    this.productService.getProducts()
      .subscribe(products => this.PRODUCTS = products.filter(p => p.family === "maison")) ;
  }

  getClothing(): void {
    this.productService.getProducts()
      .subscribe(products => this.PRODUCTS = products.filter(p => p.family === "vetements")) ;
  }

  createAccount() {
    this.router.navigate(['/formLayout']);
  }

}
