import { Component, OnInit } from '@angular/core';

const ROWS_HEIGHT: { [id:number]: number } = {1: 400, 3: 335, 4: 350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  columns = 3;
  rowHeight = ROWS_HEIGHT[this.columns];
  category: string | undefined;

  constructor() {}

  ngOnInit(): void {
      
  }

  onColumnsUpdated(newColumns: number): void {
    this.columns = newColumns;
    this.rowHeight = ROWS_HEIGHT[this.columns];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

}
