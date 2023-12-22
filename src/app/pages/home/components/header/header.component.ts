import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html'
})
export class HomeHeaderComponent implements OnInit {

  @Output() columnsChanged = new EventEmitter<number>();
  @Output() sortChanged = new EventEmitter<string>();
  @Output() showCountChanged = new EventEmitter<string>();

  sort = 'Desc';
  showCount = '12';

  constructor() {}

  ngOnInit(): void {
      
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortChanged.emit(newSort);
  }

  onShowCountUpdated(newShowCount: string): void {
    this.showCount = newShowCount;
    this.showCountChanged.emit(newShowCount);
  }

  onColumnsUpdated(newColumns: number): void {
    this.columnsChanged.emit(newColumns);
  }

}
