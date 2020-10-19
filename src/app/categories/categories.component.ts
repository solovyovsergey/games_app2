import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from '../interfaces';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent {
  @Input() categories: Category[] = [];
  selectedId: number;

  @Output() onChanged = new EventEmitter<Category>();
  onChangeCategory(category): void {
    this.selectedId = category.ID;
    this.onChanged.emit(category);
  }
}
