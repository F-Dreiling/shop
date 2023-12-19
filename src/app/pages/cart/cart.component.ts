import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  cart: Cart = { items: [ 
    { product: 'https://placehold.co/150',
    name: 'sneakers',
    price: 150,
    quantity: 1,
    id: 1 },
    { product: 'https://placehold.co/150',
    name: 'jacket',
    price: 250,
    quantity: 1,
    id: 2 }
  ] };

  datasource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  constructor() {}

  ngOnInit(): void {
      this.datasource = this.cart.items;
  }

}