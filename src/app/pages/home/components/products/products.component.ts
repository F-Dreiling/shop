import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  @Input() fullWidthMode = false;
  
  constructor() {}

  ngOnInit(): void {
      
  }
  
}
