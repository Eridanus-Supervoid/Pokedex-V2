import { InputSearch, Navbar } from '@/components';
import { PokemonCard } from '@/components/PokemonCard';
import { IElementWithId } from '@/models';
import { useAppSelector } from '@/redux';
import { GeneralContainer, ListContainer } from '@/styled-components';
import { wordsToUppercase } from '@/utils';

const Favorites: React.FC = () => {
  const { favoritePokemons } = useAppSelector((state) => state.pokedex);

  return (
    <GeneralContainer>
      <Navbar name={wordsToUppercase(`Catch Pokemons`)} to="/" />
      <InputSearch />
      <ListContainer>
        {favoritePokemons.map((pokemon: IElementWithId) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </ListContainer>
    </GeneralContainer>
  );
};
export default Favorites;
