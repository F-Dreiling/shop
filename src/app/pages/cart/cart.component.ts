import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  cart: Cart = { items: [] };

  datasource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  constructor(private cartService: CartService, private httpClient: HttpClient) {}

  ngOnInit(): void {
      this.cartService.cart.subscribe((_cart: Cart) => {
        this.cart = _cart;
        this.datasource = this.cart.items;
      })
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onRemoveItem(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

  onCheckout(): void {
    this.httpClient.
    post('http://localhost:4242/checkout', {
      items: this.cart.items
    }).
    subscribe(async (res: any) => {
      let stripe = await loadStripe('pk_test_51OQEywAdADpBY1BbxwbtVf2Yo1u5uVzds6HbNHoNN7sGyx9G5t43U8l6c9ZOi0miVHUBiNOALDzCidLgIoT9mN8y00x0Qv2zk1');
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    });
  }

}
