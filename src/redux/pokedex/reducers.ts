import { PayloadAction } from '@reduxjs/toolkit';
import { PokedexState } from './initialState';

const reducers = {
  setPokemons: (
    state: PokedexState,
    action: PayloadAction<PokedexState['pokemons']>
  ) => {
    state.pokemons = action.payload;
  },
  setPokemonTypes: (
    state: PokedexState,
    action: PayloadAction<PokedexState['pokemonTypes']>
  ) => {
    state.pokemonTypes = action.payload;
  },
  setPokemonHabitats: (
    state: PokedexState,
    action: PayloadAction<PokedexState['pokemonHabitats']>
  ) => {
    state.pokemonHabitats = action.payload;
  },
  setTypePokemons: (
    state: PokedexState,
    action: PayloadAction<PokedexState['typePokemons']>
  ) => {
    state.typePokemons = { ...state.typePokemons, ...action.payload };
  },
  setHabitatPokemons: (
    state: PokedexState,
    action: PayloadAction<PokedexState['habitatPokemons']>
  ) => {
    state.habitatPokemons = { ...state.habitatPokemons, ...action.payload };
  },
};

export default reducers;
