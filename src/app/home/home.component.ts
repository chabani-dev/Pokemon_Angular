import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../db/database';
import { Pokemon } from '../model/pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlertService } from '../services/tools/sweet-alert.service';
import { ApiRequestService } from '../services/api-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // pokemons: any;
  pokemons: Pokemon[] = [];
  pokemonTypes: string[] = [];

  onSearchPokemon(search: string) {
    console.log(`recherche de ${search}`);
    this.pokemons = POKEMONS.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    if (this.pokemons.length == 0) {
      this.sweet.customAlert('OUPS!!', 'Aucun résultat trouvé', 'warning');
    }
  }
  constructor(
    private router: Router,
    private sweet: SweetAlertService,
    private api: ApiRequestService
  ) {}
  ngOnInit(): void {
    this.getAllPokemons();
    // this.getPokemonTypes();
  }
  //fonction qui permet de recuperer tout les types de pokemon sans sans doublons(afficher un boutton par type dans le html)
  // pokemonTypes: string[] = [];

  // getPokemonTypes() {
  //   const allTypes = this.pokemons.map((pokemon) => pokemon.type);
  //   this.pokemonTypes = allTypes.filter(
  //     (type, index) => allTypes.indexOf(type) === index
  //   );
  // }

  // fonction qui permet de recuperer tout les types de pokemon sans doublons ( afficher un bouton par type dans le html)

  // Fonction appelée lorsqu'un type de pokémon est sélectionné
  onTypeButtonClick(type: string) {
    // Filtrer les pokemons par le type sélectionné
    this.pokemons = POKEMONS.filter((pokemon) => pokemon.type === type);
  }

  goToSinglePokemon(id: number): void {
    this.router.navigate(['/single', id]);
  }

  // Fonction de récupération des types de pokemon sans doublons
  getPokemonTypes() {
    const allTypes = this.pokemons.map((pokemon) => pokemon.type);
    this.pokemonTypes = Array.from(new Set(allTypes));
  }

  // fonction de recuperation des pokemons de l'API
  getAllPokemons() {
    // let data: any;
    this.api.fetchPokemon().subscribe(
      (res) => {
        this.pokemons = res;
        console.log(this.pokemons);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
