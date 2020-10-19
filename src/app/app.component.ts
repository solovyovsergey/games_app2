import { Component, OnInit} from '@angular/core';
import {GameService} from './game.service';
import {Category} from './interfaces';
import {Merchant} from './interfaces';
import {FiltersService} from './filters.service';

const merchantsToArray = merchants => (merchants
  ? Object.entries(merchants).map((val: [string, Merchant]) => val[1])
  : []);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(
    public gameService: GameService,
    private filterService: FiltersService
  ) {
  }

  data = {
    categories: [],
    merchants: [],
  };
  baseUrl = 'https://www.rost.bet/';

  ngOnInit(): void {
    this.gameService.getAllData()
      .subscribe(data => {
        this.data = {
          categories: data.categories,
          merchants: merchantsToArray(data.merchants)
        };
      });
    this.gameService.loadGames(this.filterService.filterParams);
  }
  onChangeCategory(category: Category): void {
    const categoryId =  category.ID;
    this.filterService.changeFilterParams({categoryId});
  }
  onChangeMerchants(merchants): void {
    const merchantIds = merchants.map(m => m.ID);
    this.filterService.changeFilterParams({merchantIds});
  }
  onChangeSearch(search: string): void {
    this.filterService.changeFilterParams({search});
  }
  onChangeCounter(): void {
    const count = this.filterService.filterParams.count + 10;
    this.filterService.changeFilterParams({count});
  }
}
