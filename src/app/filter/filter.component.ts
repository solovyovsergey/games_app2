import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Merchant} from '../interfaces';

interface Merchant2 extends Merchant {
  checked?: boolean;
}
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent {
  title = 'Все провайдеры';
  @Input() merchants: Merchant2[] = [];

  changeTitle(checkedMerchants: Merchant2[]): void {
    if (checkedMerchants.length) {
      this.title = checkedMerchants.length === 1
        ? checkedMerchants[0].Name
        : 'Несколько провайдеров';
    } else {
      this.title = 'Все провайдеры';
    }
  }

  @Output() onChanged = new EventEmitter<Merchant2[]>();
  onChange(): void {
    const checkedMerchants = this.merchants.filter(x => x.checked);
    this.changeTitle(checkedMerchants);
    this.onChanged.emit(checkedMerchants);
  }
}
