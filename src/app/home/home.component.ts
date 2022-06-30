import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pokemons: any[] = [];

  constructor(private _pokemon: PokemonService) { }

  ngOnInit(): void {
    for (let index = 1; index <= 30; index++) {
      this._pokemon.getPokemon(index)
        .subscribe({
          next: (pokemon) => this.pokemons.push(pokemon),
          error: (err) => alert('Ocurrió un error al consultar la API.')
        });
    }
  }

}
