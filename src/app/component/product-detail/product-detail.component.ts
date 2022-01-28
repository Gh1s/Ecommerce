import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../service/products.service";
import {Product} from "../../product";
import { Location } from "@angular/common";
import {CartService} from "../../service/cart.service";
import {SnackbarService} from "../../service/snackbar.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  selectedRating = 0;
  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star'
    }
  ];

  constructor(private route: ActivatedRoute,
              private productService: ProductsService,
              private location: Location,
              private cartService: CartService,
              private snackbarService: SnackbarService,
              private router: Router
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // @ts-ignore
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.snackbarService.openSnackBar('Your product has been added to the cart!', 'fermer');
    this.router.navigate(["products"]);
  }

  goBack(): void {
    this.location.back();
  }

  selectStar(value: any): void{
    // prevent multiple selection
    if ( this.selectedRating === 0){
      this.stars.filter( (star) => {
        if ( star.id <= value){
          star.class = 'star-gold star';
        }else{
          star.class = 'star-gray star';
        }
        return star;
      });
    }
    this.selectedRating = value;
  }

}
