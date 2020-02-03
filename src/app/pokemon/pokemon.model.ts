enum Type {
    Feu,
    Eau,
    Plante,
    Poison,
    Vol,
    Electrique
}

export class PokemonModel{
    specie : string;
    description : string;
    types : Type[];

    constructor(species:string, description:string, types:Type[]){
        this.specie = species;
        this.description = description;
        this.types = types;
    }
}