import { IElementWithId } from '@/models';
import {
  ChainLink,
  NamedAPIResource,
  PokemonAbility,
  PokemonStat,
  PokemonType,
  TypePokemon,
} from 'pokenode-ts';
import { ALL_TO_GEN_8, pokemonGenLimitList } from './generationLimit';
import { idExtractor } from './idExtractor';

export const addIdsToLists = (list: NamedAPIResource[]) => {
  let maxId = 0;
  let unorderedList = list.map((item) => {
    const id = idExtractor(item.url);
    if (+id! > maxId) maxId = +id!;
    return { name: item.name, id };
  });
  if (maxId >= ALL_TO_GEN_8) {
    unorderedList = pokemonGenLimitList([...unorderedList]);
  }
  const orderedList = unorderedList.sort((a, b) => +a.id! - +b.id!);
  return orderedList;
};

export const addIdsToTypePokemonList = (list: TypePokemon[]) => {
  const unorderedList = list.map((item) => {
    const id = idExtractor(item.pokemon.url);
    return { name: item.pokemon.name, id };
  });
  const orderedList = unorderedList.sort((a, b) => +a.id! - +b.id!);
  return orderedList;
};

export const addIdsToPokemonTypeList = (list: PokemonType[]) => {
  const typesList = list.map((item) => {
    const id = idExtractor(item.type.url);
    return { name: item.type.name, id };
  });
  return typesList;
};

export const addIdsToPokemonAbilityList = (list: PokemonAbility[]) => {
  const abilitiesList = list.map((item) => {
    const id = idExtractor(item.ability.url);
    return { name: item.ability.name, id };
  });
  return abilitiesList;
};

export const createStatsList = (list: PokemonStat[]) => {
  const statsList = list.map((item) => {
    return { name: item.stat.name, base_stat: item.base_stat };
  });
  return statsList;
};

export const createEvolutionList = (chain: ChainLink) => {
  const evolutionList: IElementWithId[] = [];
  const { evolves_to, species } = chain;
  const id = idExtractor(species.url);
  evolutionList.push({ name: species.name, id });
  let evolvesTo = evolves_to;
  while (evolvesTo.length > 0) {
    const id = idExtractor(evolves_to[0].species.url);
    evolutionList.push({ name: evolves_to[0].species.name, id });
    evolvesTo = evolvesTo[0].evolves_to;
  }
  return evolutionList;
};

export const createAllList = (list: IElementWithId[]) => {
  const listDivided = [];
  for (let i = 0; i < list.length; i += 20) {
    listDivided.push(list.slice(i, i + 20));
  }
  return listDivided;
};
