export interface IElementWithId {
  name: string;
  id: string | undefined;
}

export interface IAllListAndPagination {
  name?: string;
  pages?: number;
  currentPage?: number;
  list?: IElementWithId[][];
}

export interface IListAndPagination {
  pages: number;
  currentPage: number;
  currentOffset: number;
  list: IElementWithId[];
}

export interface IPokemonDetail {
  id: string;
  name: string;
  height: { meters: string; feetAndInches: string };
  weight: string;
  types: IElementWithId[];
  abilities: IElementWithId[];
  sprites: {
    default: string;
  };
  stats: { name: string; base_stat: number }[];
  evolution: IElementWithId[];
  description: string;
  habitat: IElementWithId;
  legendary: boolean;
  mythical: boolean;
}
