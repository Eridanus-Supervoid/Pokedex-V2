import {
  EmptyCompleteListAndPagination,
  EmptyListAndPagination,
  IAllListAndPagination,
  IElementWithId,
  IListAndPagination,
} from '@/models';

interface InitialStatePokedex {
  pokemons: IListAndPagination;
  pokemonTypes: IListAndPagination;
  pokemonHabitats: IListAndPagination;
  typePokemons: IAllListAndPagination;
  habitatPokemons: IAllListAndPagination;
  favoritePokemons: IElementWithId[];
}

const initialState: InitialStatePokedex = {
  pokemons: EmptyListAndPagination,
  pokemonTypes: EmptyListAndPagination,
  pokemonHabitats: EmptyListAndPagination,
  typePokemons: EmptyCompleteListAndPagination,
  habitatPokemons: EmptyCompleteListAndPagination,
  favoritePokemons: [{ id: '1', name: 'bulbasaur' }],
};

export type PokedexState = typeof initialState;
export default initialState;
