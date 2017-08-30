import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HEROES } from './hero.service.mock';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    // return Promise.resolve(HEROES);
    return new Promise(resolve => {
      setTimeout(() => resolve(HEROES), 500);
    });
  }
  getHero(id): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id))
  }
}
