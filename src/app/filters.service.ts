import { Injectable } from '@angular/core';
import {GameService} from './game.service';

export interface FilterParams {
  search?: string;
  categoryId?: null | number;
  merchantIds?: number[];
  count?: number;
}

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor(private gameService: GameService) { }
  filterParams: FilterParams = {
    categoryId: null,
    merchantIds: [],
    search: '',
    count: 10
  };

  changeFilterParams(newParams: FilterParams): void {
    this.filterParams = {
      ...this.filterParams,
      ...newParams
    };
    this.gameService.loadGames(this.filterParams);
  }
}
