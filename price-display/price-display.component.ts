import {
  Component,
  Input,
  OnInit} from '@angular/core';

// PriceDisplay to show the price of a Product

@Component({
  selector: 'price-display',
  template: `<div class="price-display">\${{ price }}</div>`
//  Escaping dollar sign with \ due to backtick
})
export class PriceDisplayComponent implements OnInit {
  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}
