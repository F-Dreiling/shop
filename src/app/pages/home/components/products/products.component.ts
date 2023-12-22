import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  @Input() fullWidthMode = false;
  @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {
      
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
  
}
