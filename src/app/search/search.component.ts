import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  @Input() text = '';

  @Output() onChanged = new EventEmitter<string>();
  onChange(value: string): void {
    this.onChanged.emit(value);
  }
}
