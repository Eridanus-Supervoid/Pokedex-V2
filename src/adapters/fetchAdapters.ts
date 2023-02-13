import {
  addIdsToLists,
  addIdsToTypeList,
  pokemonGenLimitList,
  pokemonGenLimitOffset,
} from '@/utils';
import { NamedAPIResource, TypePokemon } from 'pokenode-ts';

export const fullListTypePokemonsAdapter = (pokemon: TypePokemon[]) => {
  const listWithIds = addIdsToTypeList(pokemon);
  const listUntilGenLimit = pokemonGenLimitList(listWithIds);
  return listUntilGenLimit;
};

export const fullListHabitatPokemonsAdapter = (
  pokemon_species: NamedAPIResource[]
) => {
  const listWithIds = addIdsToLists(pokemon_species);
  const listUntilGenLimit = pokemonGenLimitList(listWithIds);
  return listUntilGenLimit;
};

export const listAdapter = (results: NamedAPIResource[], count: number) => {
  const listWithIds = addIdsToLists(results);
  const offsetUntilGenLimit = pokemonGenLimitOffset(count);
  return { listWithIds, offsetUntilGenLimit };
};
