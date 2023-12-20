import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

const ROWS_HEIGHT: { [id:number]: number } = {1: 400, 3: 346, 4: 346};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  columns = 3;
  rowHeight = ROWS_HEIGHT[this.columns];
  category: string | undefined;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
      
  }

  onColumnsUpdated(newColumns: number): void {
    this.columns = newColumns;
    this.rowHeight = ROWS_HEIGHT[this.columns];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    });
  }

}
