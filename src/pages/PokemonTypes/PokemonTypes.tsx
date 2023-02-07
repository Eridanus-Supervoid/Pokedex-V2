import {
  ErrorMessage,
  InputSearch,
  LinkContainer,
  Navbar,
  Pagination,
} from '@/components';
import { useFetchList } from '@/hooks';
import { IElementWithId } from '@/models';
import { getAllTypes, setPokemonTypes, useAppSelector } from '@/redux';
import { GeneralContainer, ListContainer } from '@/styled-components';
import { wordsToUppercase } from '@/utils';

const PokemonTypes: React.FC = () => {
  const { pokemonTypes } = useAppSelector((state) => state.pokedex);
  const { fetchList, loading, error } = useFetchList(
    getAllTypes,
    setPokemonTypes
  );

  return (
    <GeneralContainer>
      <Navbar name="Pokemon Types" to="/" />
      <InputSearch />
      {!loading && (
        <ListContainer>
          {pokemonTypes.list?.map((type: IElementWithId) => (
            <LinkContainer
              key={type.id}
              name={wordsToUppercase(type.name)}
              to={`/types/${type.name}`}
              bgColor={type.name}
            />
          ))}
        </ListContainer>
      )}
      <Pagination
        loading={loading}
        totalPages={pokemonTypes.pages || 0}
        currentPage={pokemonTypes.currentPage || 1}
        totalButtons={5}
        fetchList={fetchList}
        show={!!(pokemonTypes.pages - 1)}
      />
      {error && <ErrorMessage />}
    </GeneralContainer>
  );
};
export default PokemonTypes;
