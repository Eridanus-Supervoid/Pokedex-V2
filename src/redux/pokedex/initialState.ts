import {
  EmptyCompleteListAndPagination,
  EmptyListAndPagination,
  EmptyPokemonDetail,
  IAllListAndPagination,
  IElementWithId,
  IListAndPagination,
  IPokemonDetail,
} from '@/models';

interface InitialStatePokedex {
  pokemons: IListAndPagination;
  pokemonTypes: IListAndPagination;
  pokemonHabitats: IListAndPagination;
  typePokemons: IAllListAndPagination;
  habitatPokemons: IAllListAndPagination;
  favoritePokemons: IElementWithId[];
  pokemonDetail: IPokemonDetail;
}

const initialState: InitialStatePokedex = {
  pokemons: EmptyListAndPagination,
  pokemonTypes: EmptyListAndPagination,
  pokemonHabitats: EmptyListAndPagination,
  typePokemons: EmptyCompleteListAndPagination,
  habitatPokemons: EmptyCompleteListAndPagination,
  favoritePokemons: [],
  pokemonDetail: EmptyPokemonDetail,
};

export type PokedexState = typeof initialState;
export default initialState;
