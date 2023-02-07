import {
  EmptyCompleteListAndPagination,
  EmptyListAndPagination,
  IAllListAndPagination,
  IListAndPagination,
} from '@/models';

interface InitialStatePokedex {
  pokemons: IListAndPagination;
  pokemonTypes: IListAndPagination;
  pokemonHabitats: IListAndPagination;
  typePokemons: IAllListAndPagination;
  habitatPokemons: IAllListAndPagination;
}

const initialState: InitialStatePokedex = {
  pokemons: EmptyListAndPagination,
  pokemonTypes: EmptyListAndPagination,
  pokemonHabitats: EmptyListAndPagination,
  typePokemons: EmptyCompleteListAndPagination,
  habitatPokemons: EmptyCompleteListAndPagination,
};

export type PokedexState = typeof initialState;
export default initialState;
