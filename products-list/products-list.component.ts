import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  // The Product[] passed to us
  @Input() productList: Product[];
  // Outputs the Product whenever a new Product is selected
  @Output() onProductSelected: EventEmitter<Product>;

  constructor() { }

  ngOnInit() {
  }

}
