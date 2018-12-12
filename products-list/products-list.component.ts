import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter} from '@angular/core';
import { Product } from '../product.model';

// ProductList for rendering all ProductRows and storing the currently selected Product

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
  // Local component State
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
