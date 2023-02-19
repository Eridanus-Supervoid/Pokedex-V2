import { ErrorMessage, LoadingScreen, Navbar } from '@/components';
import { useFetchDetail } from '@/hooks';
import { IPokemonDetail } from '@/models';
import { useAppSelector } from '@/redux';
import { wordsToUppercase } from '@/utils';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { About, Header } from './components';
import * as S from './styled-components';

export interface IDetailsProps {
  details: IPokemonDetail;
}

const PokemonDetail: React.FC = () => {
  const { id, name } = useParams();
  const { loading, error } = useFetchDetail(id!);
  const [loadingImage, setLoadingImage] = useState(true);
  const { types } = useAppSelector((state) => state.pokedex.pokemonDetail);

  return (
    <>
      {loadingImage && <LoadingScreen />}
      {!loading && (
        <S.Container pokemonType={types[0]?.name}>
          <Navbar name={wordsToUppercase(name!)} to="/" />
          <Header loadingImage={loading} setLoadingImage={setLoadingImage} />
          <S.DetailsContainer pokemonType={types[0]?.name}>
            <S.MenuContainer>
              <S.MenuItem type="button">About</S.MenuItem>
              <S.MenuItem type="button">Status</S.MenuItem>
              <S.MenuItem type="button">Others</S.MenuItem>
            </S.MenuContainer>
            <About />
          </S.DetailsContainer>
        </S.Container>
      )}
      {error && <ErrorMessage />}
    </>
  );
};
export default PokemonDetail;
