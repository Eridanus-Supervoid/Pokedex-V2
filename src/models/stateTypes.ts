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

export const EmptyCompleteListAndPagination: IAllListAndPagination = {
  name: '',
  pages: 1,
  currentPage: 0,
  list: [],
};

export const EmptyListAndPagination: IListAndPagination = {
  pages: 0,
  currentOffset: 0,
  currentPage: 0,
  list: [],
};
