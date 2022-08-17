import { Component } from "solid-js";

type Pokemon = {
  name: string;
};

type PokemonCardPropsType = {
  pokemon: Pokemon;
};

const PokemonCard: Component<PokemonCardPropsType> = ({ pokemon }) => {
  return <div>{pokemon.name}</div>;
};

export default PokemonCard;
