import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from "../../product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input()
  product!: Product;
  @Output() edit = new EventEmitter<Product>();

}
