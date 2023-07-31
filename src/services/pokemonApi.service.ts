import { IPaginatedRequest } from '@/models';
import axios from 'axios';
import {
  EvolutionChain,
  NamedAPIResourceList,
  Pokemon,
  PokemonHabitat,
  PokemonSpecies,
  Type,
} from 'pokenode-ts';

export const API_URL = 'https://pokeapi.co/api/v2/';
export const API_IMG_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export const getAllPokemonsApi = async ({
  limit = 20,
  offset = 0,
}: IPaginatedRequest): Promise<NamedAPIResourceList> => {
  return axios.get(`${API_URL}pokemon`, {
    params: { limit, offset },
  });
};

export const getAllTypesApi = async ({
  limit = 20,
  offset = 0,
}: IPaginatedRequest): Promise<NamedAPIResourceList> => {
  return axios.get(`${API_URL}type`, {
    params: { limit, offset },
  });
};

export const getAllHabitatsApi = async ({
  limit = 20,
  offset = 0,
}: IPaginatedRequest): Promise<NamedAPIResourceList> => {
  return axios.get(`${API_URL}pokemon-habitat`, {
    params: { limit, offset },
  });
};

export const getTypePokemonsApi = async (type: string): Promise<Type> => {
  return axios.get(`${API_URL}type/${type}`);
};

export const getHabitatPokemonsApi = async (
  habitat: string
): Promise<PokemonHabitat> => {
  return axios.get(`${API_URL}pokemon-habitat/${habitat}`);
};

export const getPokemonApi = async (id: number): Promise<Pokemon> => {
  return axios.get(`${API_URL}pokemon/${id}`);
};

export const getPokemonSpeciesApi = async (
  id: number
): Promise<PokemonSpecies> => {
  return axios.get(`${API_URL}pokemon-species/${id}`);
};

export const getEvolutionChainApi = async (
  id: number
): Promise<EvolutionChain> => {
  return axios.get(`${API_URL}evolution-chain/${id}`);
};
