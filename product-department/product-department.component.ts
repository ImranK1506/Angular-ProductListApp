import {
  Component,
  Input,
  OnInit} from '@angular/core';
import { Product } from '../product.model';
// ProductDepartment to show the breadcrumbs to a Product

@Component({
  selector: 'product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
