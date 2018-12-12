import {
  Component, HostBinding, Input,
  OnInit
} from '@angular/core';

import { Product } from '../product.model';

// ProductRow for single display of a Product

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() { }

  ngOnInit() {
  }

}
