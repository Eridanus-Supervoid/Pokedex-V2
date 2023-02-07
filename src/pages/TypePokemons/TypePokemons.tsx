import { ErrorMessage, InputSearch, Navbar, Pagination } from '@/components';
import { PokemonCard } from '@/components/PokemonCard';
import { useFetchAllList } from '@/hooks';
import { IElementWithId } from '@/models';
import { getTypePokemons, setTypePokemons, useAppSelector } from '@/redux';
import { GeneralContainer, ListContainer } from '@/styled-components';
import { wordsToUppercase } from '@/utils';
import { useParams } from 'react-router-dom';

const TypePokemons: React.FC = () => {
  const { type } = useParams();
  const { typePokemons } = useAppSelector((state) => state.pokedex);
  const { fetchList, loading, error } = useFetchAllList(
    type!,
    getTypePokemons,
    setTypePokemons
  );

  return (
    <GeneralContainer>
      <Navbar name={wordsToUppercase(`${type!} Pokemons`)} to="/types" />
      <InputSearch />
      {!loading && (
        <ListContainer>
          {typePokemons.list![typePokemons.currentPage! - 1]?.map(
            (pokemon: IElementWithId) => (
              <PokemonCard pokemon={pokemon} key={pokemon.id} />
            )
          )}
        </ListContainer>
      )}
      <Pagination
        loading={loading}
        totalPages={typePokemons.pages || 0}
        currentPage={typePokemons.currentPage || 1}
        totalButtons={5}
        fetchAllList={fetchList}
        show={!!(typePokemons.pages! - 1)}
        group={typePokemons.name}
        paginateAll
      />
      {error && <ErrorMessage />}
    </GeneralContainer>
  );
};
export default TypePokemons;
