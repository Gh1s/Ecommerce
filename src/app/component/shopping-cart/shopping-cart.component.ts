import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {CartService} from "../../service/cart.service";
import { OverlayModule } from "@angular/cdk/overlay";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Output('cdkConnectedOverlayDisableClose') disableClose = false;
  overlayModule: OverlayModule | undefined ;

  constructor(private router: Router,
              private cartService: CartService) { }

  ngOnInit(): void {
  }

  items = this.cartService.getItems();

  getTotalCost() {
    return this.items.map(item => item.price).reduce((acc, value) => acc + value, 0);
  }

  closeShoppingCart(status: boolean) {

  }

  onClickedOutside(e: Event) {
    console.log("clicked outside", e);
  }
}
