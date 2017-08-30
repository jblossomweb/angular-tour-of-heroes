import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as HeroesMock from './heroes.mock.json';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = <any>HeroesMock;
    return {heroes};
  }
}
