import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { StoreService } from '../../services/store.service';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';

const ROWS_HEIGHT: { [id:number]: number } = {1: 400, 3: 346, 4: 346};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

  columns = 3;
  rowHeight = ROWS_HEIGHT[this.columns];
  category: string | undefined;
  products: Array<Product> | undefined;
  count = '12';
  sort = 'desc';
  productsSubscription: Subscription | undefined;

  constructor(private cartService: CartService, private storeService: StoreService) { }

  ngOnInit(): void {
      this.getProducts();
  }

  getProducts(): void {
    this.productsSubscription = this.storeService.getAllProducts(this.count, this.sort, this.category).subscribe((_products) => this.products = _products);
  }

  onColumnsUpdated(newColumns: number): void {
    this.columns = newColumns;
    this.rowHeight = ROWS_HEIGHT[this.columns];
  }

  onShowCountUpdated(newShowCount: string): void {
    this.count = newShowCount;
    this.getProducts();
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.getProducts();
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getProducts();
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

  ngOnDestroy(): void {
      if (this.productsSubscription) {
        this.productsSubscription.unsubscribe();
      }
  }

}
