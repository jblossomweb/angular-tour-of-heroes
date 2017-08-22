import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HEROES } from './hero.service.mock';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    // return Promise.resolve(HEROES);
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(HEROES), 2000);
    });
  }
}
