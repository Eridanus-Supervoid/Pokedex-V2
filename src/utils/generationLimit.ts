import { IElementWithId } from '@/models';

export const ALL_TO_GEN_8 = 905;

export const pokemonGenLimitList = (list: IElementWithId[]) => {
  const listUntilGenLimit = list.filter((item) => +item.id! <= ALL_TO_GEN_8);
  return listUntilGenLimit;
};

export const pokemonGenLimitOffset = (offset: number) => {
  const offsetUntilGenLimit = offset <= ALL_TO_GEN_8 ? offset : ALL_TO_GEN_8;
  return offsetUntilGenLimit;
};
