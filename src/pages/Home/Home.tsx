import { InputSearch, Navbar, LinkContainer } from '@/components';
import * as S from './styled-components';

const Home: React.FC = () => {
  return (
    <>
      <S.Header>
        <Navbar />
        <S.Search>
          <h1>
            Find your
            <br />
            favorite Pokemon
          </h1>
          <InputSearch />
        </S.Search>
      </S.Header>
      <S.Menu>
        <LinkContainer to="/pokemons" name="All Pokemons" bgColor="grass" />
        <LinkContainer to="/types" name="Types" bgColor="fire" />
        <LinkContainer to="/habitats" name="Habitats" bgColor="water" />
        <LinkContainer to="/favorites" name="Favorites" />
      </S.Menu>
    </>
  );
};
export default Home;
