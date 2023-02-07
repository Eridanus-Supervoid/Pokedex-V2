import { IElementWithId } from '@/models';
import { NamedAPIResource, TypePokemon } from 'pokenode-ts';
import { idExtractor } from './idExtractor';

export const addIdsToLists = (list: NamedAPIResource[]) => {
  const unorderedList = list.map((item) => {
    const id = idExtractor(item.url);
    return { name: item.name, id };
  });
  const orderedList = unorderedList.sort((a, b) => +a.id! - +b.id!);
  return orderedList;
};

export const addIdsToListsTypes = (list: TypePokemon[]) => {
  const unorderedList = list.map((item) => {
    const id = idExtractor(item.pokemon.url);
    return { name: item.pokemon.name, id };
  });
  const orderedList = unorderedList.sort((a, b) => +a.id! - +b.id!);
  return orderedList;
};

export const createListTypes = (list: IElementWithId[]) => {
  const listDivided = [];
  for (let i = 0; i < list.length; i += 20) {
    listDivided.push(list.slice(i, i + 20));
  }
  return listDivided;
};
