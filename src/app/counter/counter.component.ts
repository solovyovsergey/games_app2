import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent {
  @Output() onChanged = new EventEmitter<void>();
  onChange(): void {
    this.onChanged.emit();
  }
}
