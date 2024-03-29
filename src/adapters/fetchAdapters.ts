import { IPokemonDetail } from '@/models';
import {
  addIdsToLists,
  addIdsToPokemonAbilityList,
  addIdsToPokemonTypeList,
  addIdsToTypePokemonList,
  createEvolutionList,
  createStatsList,
  idExtractor,
  pokemonGenLimitList,
  pokemonGenLimitOffset,
} from '@/utils';
import {
  descriptionFormatter,
  heightTransformer,
  weightTransformer,
} from '@/utils/pokemonDetails';
import {
  ChainLink,
  NamedAPIResource,
  Pokemon,
  PokemonSpecies,
  TypePokemon,
} from 'pokenode-ts';

export const fullListTypePokemonsAdapter = (pokemon: TypePokemon[]) => {
  const listWithIds = addIdsToTypePokemonList(pokemon);
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

export const pokemonDetailsAdapter = (
  pokemon: Pokemon,
  pokemonSpecies: Omit<PokemonSpecies, 'evolution_chain'>,
  chain: ChainLink
) => {
  const { id, name, height, weight, sprites, types, abilities, stats } =
    pokemon;

  const { flavor_text_entries, habitat, is_legendary, is_mythical } =
    pokemonSpecies;

  const habitatID = habitat ? idExtractor(habitat.url) : '';
  const habitatName = habitat ? habitat.name : 'Unknown';

  const descriptionFormatted = descriptionFormatter(
    flavor_text_entries[0].flavor_text
  );

  const pokemonDetails: IPokemonDetail = {
    id: id.toString(),
    name: name,
    height: heightTransformer(height),
    weight: weightTransformer(weight),
    types: addIdsToPokemonTypeList(types),
    abilities: addIdsToPokemonAbilityList(abilities),
    sprites: {
      default: sprites.other?.['official-artwork']?.front_default!,
    },
    stats: createStatsList(stats),
    evolution: createEvolutionList(chain),
    description: descriptionFormatted,
    habitat: {
      name: habitatName,
      id: habitatID,
    },
    legendary: is_legendary,
    mythical: is_mythical,
  };

  return pokemonDetails;
};
