import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { assignIn } from 'lodash';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../models/hero.model';
import * as HeroesMock from './heroes.mock.json';

@Injectable()
export class HeroService {
  constructor(private http: Http) { }
  private headers = new Headers({'Content-Type': 'application/json'});

  getHeroes(): Promise<Hero[]> {
    return this.http.get(`api/heroes`)
     .toPromise()
     .then(response => response.json().data as Hero[])
     .catch(this.handleError);
  }

  getHero(id): Promise<Hero> {
    return this.http.get(`api/heroes/${id}`)
     .toPromise()
     .then(response => response.json().data as Hero)
     .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const id = hero.id;
    return this.http.put(
      `api/heroes/${id}`,
      JSON.stringify(hero),
      {headers: this.headers}
    )
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http.post(
      `api/heroes`,
      JSON.stringify({name: name}),
      {headers: this.headers}
    )
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    return this.http.delete(
      `api/heroes/${id}`,
      {headers: this.headers}
    )
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('HeroService Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

@Injectable()
export class HeroServiceMock {
  private heroes = <any>HeroesMock as Hero[];

  getHeroes(): Promise<Hero[]> {
    return new Promise<Hero[]>((resolve) => {
      resolve(this.heroes);
    });
  }

  getHero(id): Promise<Hero> {
    return new Promise<Hero>((resolve) => {
      resolve(this.heroes.find(hero => hero.id === id));
    });
  }

  update(update: Hero): Promise<Hero> {
    return new Promise<Hero>(async(resolve) => {
      let hero = await this.getHero(update.id);
      hero = assignIn(hero, update);
      resolve(hero);
    });
  }

  create(name: string): Promise<Hero> {
    return new Promise<Hero>((resolve) => {
      const hero = {id: this.heroes.length + 1, name} as Hero;
      this.heroes.push(hero);
      resolve(hero);
    });
  }

  delete(id: number): Promise<void> {
    return new Promise<void>(async(resolve) => {
      const hero = await this.getHero(id);
      this.heroes = this.heroes.filter(h => h !== hero);
      resolve();
    });
  }
}
