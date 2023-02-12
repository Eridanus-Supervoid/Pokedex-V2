import {
  ErrorMessage,
  InputSearch,
  LinkContainer,
  LoadingScreen,
  Navbar,
  Pagination,
} from '@/components';
import { GeneralContainer, ListContainer } from '@/styled-components';
import { wordsToUppercase } from '@/utils';
import { habitatToColor } from './utils';
import { getAllHabitats, setPokemonHabitats, useAppSelector } from '@/redux';
import { useFetchList } from '@/hooks';
import { IElementWithId } from '@/models';

const PokemonHabitats: React.FC = () => {
  const { pokemonHabitats } = useAppSelector((state) => state.pokedex);
  const { fetchList, loading, error } = useFetchList(
    getAllHabitats,
    setPokemonHabitats
  );

  return (
    <>
      {loading && <LoadingScreen />}
      <GeneralContainer>
        <Navbar name="Pokemon Habitats" to="/" />
        <InputSearch />
        {!loading && (
          <ListContainer long>
            {pokemonHabitats.list?.map((habitat: IElementWithId) => (
              <LinkContainer
                key={habitat.id}
                name={wordsToUppercase(habitat.name)}
                to={`/habitats/${habitat.name}`}
                bgColor={habitatToColor(habitat.name)}
              />
            ))}
          </ListContainer>
        )}
        <Pagination
          loading={loading}
          totalPages={pokemonHabitats.pages || 0}
          currentPage={pokemonHabitats.currentPage || 1}
          totalButtons={5}
          fetchList={fetchList}
          show={!!(pokemonHabitats.pages - 1)}
        />
        {error && <ErrorMessage />}
      </GeneralContainer>
    </>
  );
};
export default PokemonHabitats;
