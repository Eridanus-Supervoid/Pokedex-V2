import { ErrorMessage, InputSearch, Navbar, Pagination } from '@/components';
import { PokemonCard } from '@/components/PokemonCard';
import { useFetchList } from '@/hooks';
import { IElementWithId } from '@/models';
import { getAllPokemons, setPokemons, useAppSelector } from '@/redux';
import { GeneralContainer, ListContainer } from '@/styled-components';

const Pokemons: React.FC = () => {
  const { pokemons } = useAppSelector((state) => state.pokedex);
  const { fetchList, loading, error } = useFetchList(
    getAllPokemons,
    setPokemons
  );

  return (
    <GeneralContainer>
      <Navbar name="Pokemons" to="/" />
      <InputSearch />
      {!loading && (
        <ListContainer>
          {pokemons.list?.map((pokemon: IElementWithId) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </ListContainer>
      )}
      <Pagination
        loading={loading}
        totalPages={pokemons.pages || 0}
        currentPage={pokemons.currentPage || 1}
        totalButtons={5}
        fetchList={fetchList}
        show={!!(pokemons.pages - 1)}
      />
      {error && <ErrorMessage />}
    </GeneralContainer>
  );
};
export default Pokemons;
