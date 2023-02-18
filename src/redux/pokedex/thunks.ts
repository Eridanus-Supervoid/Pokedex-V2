import {
  fullListHabitatPokemonsAdapter,
  fullListTypePokemonsAdapter,
  listAdapter,
  pokemonDetailsAdapter,
} from '@/adapters';
import { IElementWithId, IPaginatedRequest } from '@/models';
import {
  getAllHabitatsApi,
  getAllPokemonsApi,
  getAllTypesApi,
  getEvolutionChainApi,
  getHabitatPokemonsApi,
  getPokemonApi,
  getPokemonSpeciesApi,
  getTypePokemonsApi,
} from '@/services';
import { idExtractor } from '@/utils';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllPokemons = createAsyncThunk(
  'pokedex/getAllPokemons',
  async (paginatedRequest: IPaginatedRequest, { rejectWithValue }) => {
    try {
      const { results, count } = await getAllPokemonsApi(paginatedRequest);
      const { listWithIds, offsetUntilGenLimit } = listAdapter(results, count);
      return { listWithIds, offsetUntilGenLimit };
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllTypes = createAsyncThunk(
  'pokedex/getAllTypes',
  async (paginatedRequest: IPaginatedRequest, { rejectWithValue }) => {
    try {
      const { results, count } = await getAllTypesApi(paginatedRequest);
      const { listWithIds, offsetUntilGenLimit } = listAdapter(results, count);
      return { listWithIds, offsetUntilGenLimit };
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllHabitats = createAsyncThunk(
  'pokedex/getAllHabitats',
  async (paginatedRequest: IPaginatedRequest, { rejectWithValue }) => {
    try {
      const { results, count } = await getAllHabitatsApi(paginatedRequest);
      const { listWithIds, offsetUntilGenLimit } = listAdapter(results, count);
      return { listWithIds, offsetUntilGenLimit };
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getTypePokemons = createAsyncThunk(
  'pokedex/getTypePokemons',
  async (type: string, { rejectWithValue }) => {
    try {
      const { pokemon } = await getTypePokemonsApi(type);
      const listWithIds: IElementWithId[] =
        fullListTypePokemonsAdapter(pokemon);
      return listWithIds;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getHabitatPokemons = createAsyncThunk(
  'pokedex/getHabitatPokemons',
  async (habitat: string, { rejectWithValue }) => {
    try {
      const { pokemon_species } = await getHabitatPokemonsApi(habitat);
      const listWithIds: IElementWithId[] =
        fullListHabitatPokemonsAdapter(pokemon_species);
      return listWithIds;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getPokemon = createAsyncThunk(
  'pokedex/getPokemon',
  async (id: number, { rejectWithValue }) => {
    try {
      const pokemon = await getPokemonApi(id);
      const { evolution_chain, ...pokemonSpecies } = await getPokemonSpeciesApi(
        id
      );
      const evolutionChainId = idExtractor(evolution_chain.url);
      const { chain } = await getEvolutionChainApi(+evolutionChainId!);
      const pokemonDetails = pokemonDetailsAdapter(
        pokemon,
        pokemonSpecies,
        chain
      );
      return { pokemonDetails };
    } catch (error: any) {
      console.log('errorAqui', error);
      return rejectWithValue(error.response.data);
    }
  }
);
