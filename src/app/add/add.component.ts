import { Component } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { Router } from '@angular/router';
import { POKEMONS } from '../db/database';
import { ApiRequestService } from '../services/api-request.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  //cree un formulaire pour ajouter un pokemon
  // le formulaire doit contenir les champs suivants :
  // - nom du Pokemon
  // type image hp cp
  // puis rediriger vers la page d'accueil

  newPokemon: Pokemon = new Pokemon();

  constructor(private router: Router, private api: ApiRequestService) {}

  onAddPokemon(): void {
    this.newPokemon.id = POKEMONS.length + 1;
    this.api.addPokemon(this.newPokemon).subscribe(
      (res) => {
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );
    POKEMONS.push(this.newPokemon);
    // this.router.navigate(['/']);
  }
}
