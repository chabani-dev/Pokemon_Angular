import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { Router } from '@angular/router';
import { ApiRequestService } from '../services/api-request.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  @Input() data: Pokemon | any = new Pokemon();

  constructor(private api: ApiRequestService) {}
  ngOnInit(): void {
    console.log(this.data);
  }

  // Injectez le service Router dans votre composant

  editPokemon(): void {
    this.api.updatePokemon(this.data).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
