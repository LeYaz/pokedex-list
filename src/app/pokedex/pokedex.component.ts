import { Component, OnInit } from '@angular/core';
import { PokemonModel } from '../pokemon/pokemon.model'
import data from '../../assets/pokemon.data.js'

@Component({
  selector: 'pkd-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemons: PokemonModel[] = new Array();
  pokemon: PokemonModel;
  pkvide : PokemonModel = {
    description: "",
    specie : "Aucun",
    types : []

  }
  constructor() { }

  ngOnInit() {
    
    data.forEach(element => {
      var specie = element.specie;
      var description = element.description;
      var types = element.types;
      var pk = new PokemonModel(specie, description, types)
      this.pokemons.push(pk);
    });
    
  }
  survolChangedHandler(pokemon:PokemonModel){
    this.pokemon = pokemon;

  }

  sortiChangedHandler(pokemon:PokemonModel){
    this.pokemon = null;
  }

}
