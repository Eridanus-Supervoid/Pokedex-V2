import {
  IAllListAndPagination,
  IListAndPagination,
  IPokemonDetail,
} from './stateTypes';

export const EmptyCompleteListAndPagination: IAllListAndPagination = {
  name: '',
  pages: 1,
  currentPage: 0,
  list: [[]],
};

export const EmptyListAndPagination: IListAndPagination = {
  pages: 0,
  currentOffset: 0,
  currentPage: 0,
  list: [],
};

export const EmptyPokemonDetail: IPokemonDetail = {
  id: '0',
  name: '',
  height: { meters: '', feetAndInches: '' },
  weight: { kg: '', lbs: '' },
  types: [],
  abilities: [],
  sprites: {
    default: '',
  },
  stats: [],
  evolution: [],
  description: '',
  habitat: { name: '', id: '' },
  legendary: false,
  mythical: false,
};
