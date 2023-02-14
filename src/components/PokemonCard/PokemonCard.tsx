import { IElementWithId } from '@/models';
import { wordsToUppercase } from '@/utils';
import { useFavoritePokemon } from '@/hooks';
import { useState } from 'react';
import { API_IMG_URL } from '@/services';
import { Spinner } from '@/styled-components';
import * as S from './styled-components';
import iconOpen from '@/assets/images/icon-open-pokeball.png';
import iconClose from '@/assets/images/icon-close-pokeball.png';
import noImage from '@/assets/images/icon-no-image.png';
import { getPokemon, setPokemonDetail, useAppDispatch } from '@/redux';

interface IPokemonCardProps {
  pokemon: IElementWithId;
  imageLoaded: () => void;
}

export const PokemonCard: React.FC<IPokemonCardProps> = ({
  pokemon,
  imageLoaded,
}) => {
  const { id, name } = pokemon;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { isFavorite, addFavoritePokemon, deleteFavoritePokemon } =
    useFavoritePokemon(id!);

  //BORRAR
  const dispatch = useAppDispatch();

  const handleFavoriteToggle = () => {
    isFavorite ? deleteFavoritePokemon(+id!) : addFavoritePokemon(pokemon);
  };

  const handleImageClick = () => {
    dispatch(getPokemon(+id!))
      .unwrap()
      .then(({ pokemonDetails }) => {
        dispatch(setPokemonDetail(pokemonDetails));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLoad = () => {
    setLoading(false);
    imageLoaded();
  };

  return (
    <S.Card>
      <S.HeaderContainer>
        <S.FavoriteToggle
          src={isFavorite ? iconClose : iconOpen}
          alt={isFavorite ? 'Close Pokeball' : 'Open Pokeball'}
          onClick={handleFavoriteToggle}
        />
        <S.Id>{`N°${id}`}</S.Id>
      </S.HeaderContainer>
      <S.ImageContainer onClick={handleImageClick}>
        {loading && (
          <S.SpinnerContainer>
            <Spinner />
          </S.SpinnerContainer>
        )}
        <S.Image
          src={error ? noImage : `${API_IMG_URL}${id}.png`}
          alt={`${name} image`}
          onLoad={handleLoad}
          onError={() => {
            setError(true);
          }}
          loadingCheck={loading}
          error={error}
        />
      </S.ImageContainer>
      <div>{wordsToUppercase(name)}</div>
    </S.Card>
  );
};
