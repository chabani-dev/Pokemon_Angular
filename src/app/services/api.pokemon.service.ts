import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { POKEMONS } from '../db/database';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let pokemons = POKEMONS;
    return { pokemons };
  }
}
