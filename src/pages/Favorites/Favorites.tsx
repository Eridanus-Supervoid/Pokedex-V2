import { InputSearch, Navbar } from '@/components';
import { PokemonCard } from '@/components/PokemonCard';
import { IElementWithId } from '@/models';
import { useAppSelector } from '@/redux';
import { GeneralContainer, ListContainer } from '@/styled-components';
import { wordsToUppercase } from '@/utils';

const Favorites: React.FC = () => {
  const { favoritePokemons } = useAppSelector((state) => state.pokedex);
  // const { loadingImages, imageLoaded } = useImageLoader(favoritePokemons);

  return (
    <>
      {/* {loadingImages && <LoadingScreen />} */}
      <GeneralContainer>
        <Navbar name={wordsToUppercase(`Catch Pokemons`)} to="/" />
        <InputSearch />
        <ListContainer>
          {favoritePokemons.map((pokemon: IElementWithId) => (
            <PokemonCard
              pokemon={pokemon}
              key={pokemon.id}
              imageLoaded={() => {}}
            />
          ))}
        </ListContainer>
      </GeneralContainer>
    </>
  );
};
export default Favorites;
