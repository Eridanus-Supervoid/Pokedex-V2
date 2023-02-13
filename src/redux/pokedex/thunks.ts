import {
  fullListHabitatPokemonsAdapter,
  fullListTypePokemonsAdapter,
  listAdapter,
} from '@/adapters/fetchAdapters';
import { IElementWithId, IPaginatedRequest } from '@/models';
import {
  getAllHabitatsApi,
  getAllPokemonsApi,
  getAllTypesApi,
  getHabitatPokemonsApi,
  getTypePokemonsApi,
} from '@/services';
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
