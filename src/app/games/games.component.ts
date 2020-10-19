import {Component, Input} from '@angular/core';
import {Game} from '../interfaces';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.sass']
})
export class GamesComponent {
  @Input() games: Game[] = [];
  @Input() baseUrl = '';

  getUrl(url): string {
    return url ? `${this.baseUrl}${url}` : '#';
  }
}
