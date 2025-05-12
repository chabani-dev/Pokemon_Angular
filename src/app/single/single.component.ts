import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../model/pokemon';
import { POKEMONS } from '../db/database';
import { SweetAlertService } from '../services/tools/sweet-alert.service';
import { ApiRequestService } from '../services/api-request.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
})
export class SingleComponent implements OnInit {
  pokemon: Pokemon | undefined = new Pokemon();
  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private sweet: SweetAlertService,
    private api: ApiRequestService
  ) {}
  ngOnInit(): void {
    // this.getPokemonById(this.getPokemonById);
  }

  getParamsForUrl(): Number {
    let urlId = this.activatedRouter.snapshot.params['id'];
    console.log(urlId);
    return Number(urlId);
  }
  // fonction dui permer id du pokemon sur la page detail(html)
  getPokemonById(id: number): void {
    this.api.getPokemonById(id).subscribe(
      (res) => {
        this.pokemon = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // this.pokemon = POKEMONS.find((pokemon) => pokemon.id === id);
  // console.log(this.pokemon);

  // picture , name, hp , cp, type, creactedAt

  // fonction qui edite un pokemon
  editPokemon(): void {
    this.router.navigate(['/edit', this.pokemon?.id]);
  }

  // Fonction pour supprimer un pokemon via une modal.
  // si ont clique sur oui le pokemon est supprimer puis ont redirige vers home
  removePokemon(): void {
    this.api.deletePokemon(this.pokemon?.id).subscribe(
      (res) => {
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err);
      }
    );

    this.sweet.customToast('Supprimer avec succès', 'success');
  }
  // let index = POKEMONS.indexOf(this.pokemon as Pokemon);
  // console.log(index);
  // POKEMONS.splice(index, 1);
  // this.router.navigate(['/']);
  // this.sweet.customToast('Supprimer avec succès', 'success');
  // Supprime 1 élément à l'index spécifié
}

// removePokemon(): void {
//   const id = this.pokemon.id;
//   this.apiRequestservice.removePokemon(id).subscribe(() => {
//     console.log(`Pokemon with id ${id} has been removed.`);
//     this.router.navigate(['/']);
//     this.sweet.customToast('Supprimer avec succès', 'success');
//   });
// }
