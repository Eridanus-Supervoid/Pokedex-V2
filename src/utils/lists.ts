import { IElementWithId } from '@/models';
import { NamedAPIResource, TypePokemon } from 'pokenode-ts';
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

export const addIdsToTypeList = (list: TypePokemon[]) => {
  const unorderedList = list.map((item) => {
    const id = idExtractor(item.pokemon.url);
    return { name: item.pokemon.name, id };
  });
  const orderedList = unorderedList.sort((a, b) => +a.id! - +b.id!);
  return orderedList;
};

export const createAllList = (list: IElementWithId[]) => {
  const listDivided = [];
  for (let i = 0; i < list.length; i += 20) {
    listDivided.push(list.slice(i, i + 20));
  }
  return listDivided;
};
