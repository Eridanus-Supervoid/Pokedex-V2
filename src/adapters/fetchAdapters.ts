import { addIdsToLists, addIdsToListsTypes } from '@/utils';
import { NamedAPIResource, TypePokemon } from 'pokenode-ts';

export const fullListTypePokemonsAdapter = (pokemon: TypePokemon[]) => {
  return addIdsToListsTypes(pokemon);
};

export const fullListHabitatPokemonsAdapter = (
  pokemon_species: NamedAPIResource[]
) => {
  return addIdsToLists(pokemon_species);
};
