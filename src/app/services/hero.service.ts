import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../models/hero.model';
import * as HeroesMock from './heroes.mock.json';

@Injectable()
export class HeroService {
  constructor(private http: Http) { }
  getHeroes(): Promise<Hero[]> {
    return this.http.get(`api/heroes`)
     .toPromise()
     .then(response => response.json().data as Hero[])
     .catch(this.handleError)
  }

  getHero(id): Promise<Hero> {
    return this.http.get(`api/heroes/${id}`)
     .toPromise()
     .then(response => response.json().data as Hero)
     .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('HeroService Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

@Injectable()
export class HeroServiceMock {

  getHeroes(): Promise<Hero[]> {
    return new Promise<Hero[]>((resolve) => {
      resolve(<any>HeroesMock as Hero[])
    })
  }
  
  getHero(id): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id))
  }
}
