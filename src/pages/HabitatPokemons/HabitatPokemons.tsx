import {
  ErrorMessage,
  InputSearch,
  LoadingScreen,
  Navbar,
  Pagination,
} from '@/components';
import { PokemonCard } from '@/components/PokemonCard';
import { useFetchAllList, useImageLoader } from '@/hooks';
import { IElementWithId } from '@/models';
import {
  getHabitatPokemons,
  setHabitatPokemons,
  useAppSelector,
} from '@/redux';
import { GeneralContainer, ListContainer } from '@/styled-components';
import { wordsToUppercase } from '@/utils';
import { useParams } from 'react-router-dom';

const HabitatPokemons: React.FC = () => {
  const { habitat } = useParams();
  const { habitatPokemons } = useAppSelector((state) => state.pokedex);
  const { loadingImages, imageLoaded } = useImageLoader(habitatPokemons);
  const { fetchList, loading, error } = useFetchAllList(
    habitat!,
    getHabitatPokemons,
    setHabitatPokemons
  );

  return (
    <>
      {loadingImages && <LoadingScreen />}
      <GeneralContainer>
        <Navbar name={wordsToUppercase(`${habitat!} Species`)} to="/habitats" />
        <InputSearch />
        {!loading && (
          <ListContainer>
            {habitatPokemons.list![habitatPokemons.currentPage! - 1]?.map(
              (pokemon: IElementWithId) => (
                <PokemonCard
                  pokemon={pokemon}
                  key={pokemon.id}
                  imageLoaded={imageLoaded}
                />
              )
            )}
          </ListContainer>
        )}
        <Pagination
          loading={loading}
          totalPages={habitatPokemons.pages || 0}
          currentPage={habitatPokemons.currentPage || 1}
          totalButtons={5}
          fetchAllList={fetchList}
          show={!!(habitatPokemons.pages! - 1)}
          group={habitatPokemons.name}
          paginateAll
        />
        {error && <ErrorMessage />}
      </GeneralContainer>
    </>
  );
};
export default HabitatPokemons;
