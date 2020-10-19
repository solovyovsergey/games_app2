import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Game} from './interfaces/game';
import {FilterParams} from './filters.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private http: HttpClient) {
  }
  games: Game[] = [];

  url = 'https://www.rost.bet/api/v1/games?lang=en';
  localUrl = '/assets/games.json';
  getAllData(): any {
    return this.http.get(this.localUrl);
  }

  loadGames(filters: FilterParams = {}): void {
    this.getAllData().subscribe((data) => {
      let games: Game[] = data.games || [];
      games = this.filterGames(games, filters);
      this.setGames(games);
    });
  }

  setGames(games: Game[]): void {
    this.games.length = 0;
    this.games.push(...games);
  }

  filterGames(games: Game[], filters: FilterParams): Game[] {
    const {
      categoryId,
      merchantIds,
      search,
      count,
    } = filters;

    if (categoryId) {
      games = games.filter(game => game.CategoryID.includes(categoryId));
    }
    if (merchantIds && merchantIds.length) {
      games = games.filter(game => merchantIds.includes(game.MerchantID));
    }
    if (search) {
      const reg = new RegExp(search, 'i');
      games = games.filter(game => reg.test(game.Name.en));
    }
    games = games.sort( (a, b) => {
      if (a.Name.en > b.Name.en) {
        return 1;
      }
      if (a.Name.en < b.Name.en) {
        return -1;
      }
      return 0;
    });
    if (count) {
      games = games.slice(0, count);
    }
    return games;
  }
}
