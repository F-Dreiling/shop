import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html'
})
export class HomeHeaderComponent implements OnInit {

  @Output() columnsCount = new EventEmitter<number>();
  sort = 'Desc';
  itemsShowCount = 12;

  constructor() {}

  ngOnInit(): void {
      
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(newShowCount: number): void {
    this.itemsShowCount = newShowCount;
  }

  onColumnsUpdated(newColumns: number): void {
    this.columnsCount.emit(newColumns);
  }

}
