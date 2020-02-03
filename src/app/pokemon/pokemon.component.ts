import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonModel } from './pokemon.model'
@Component({
  selector: 'pkd-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

   @Input() pokemon : PokemonModel;  
   imgsrc :string;

  @Output() survolPokemon: EventEmitter<PokemonModel> = new EventEmitter();

  @Output() sortiPokemon: EventEmitter<PokemonModel> = new EventEmitter();
  constructor() { }

  survol(){
    this.survolPokemon.emit(this.pokemon);
  }

  sorti(){
    this.sortiPokemon.emit(this.pokemon);
  }

  ngOnInit() {
    
  }

}
