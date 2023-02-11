import { IElementWithId } from '@/models';

export const deletePokemonFromCollection = (
  array: IElementWithId[],
  id: number
) => {
  const index = array.findIndex((item) => +item.id! === id);
  if (index !== -1) {
    array.splice(index, 1);
  }
};
