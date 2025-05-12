import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Pokemon } from '../model/pokemon';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  url = environment.endpoint;

  constructor(
    private http: HttpClient // permer de faire des requêtes (res) http
  ) {}

  // fonction de récupération de tout les pokemon
  fetchPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url);
  }

  // Fonction de récupération d'un pokemon par son id
  getPokemonById(id: Number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.url}/${id}`);
  }

  // Fonction de modification d'un pokemon
  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    return this.http.put<Pokemon>(
      `${this.url}/${pokemon.id}`,
      pokemon,
      httpOptions
    );
  }

  // Fonction de suppression d'un pokemon
  deletePokemon(id: Number | undefined): Observable<Pokemon> {
    return this.http.delete<Pokemon>(`${this.url}/${id}`);
  }
  // Fonction d'ajout d'un pokemon
  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this.http.post<Pokemon>(this.url, pokemon, httpOptions);
  }

  // Fonction de recherche de pokemon par son "name"
  searchPokemon(name: string): Observable<Pokemon[]> {
    let params = new HttpParams().set('name', name);
    return this.http.get<Pokemon[]>(this.url, { params });
  }
}
