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

  const handleClick = () => {
    isFavorite ? deleteFavoritePokemon(+id!) : addFavoritePokemon(pokemon);
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
          onClick={handleClick}
        />
        <S.Id>{`N°${id}`}</S.Id>
      </S.HeaderContainer>
      {loading && <Spinner />}
      <img
        src={error ? noImage : `${API_IMG_URL}${id}.png`}
        style={error ? { padding: '1rem' } : { padding: '0' }}
        alt={`${name} image`}
        onLoad={handleLoad}
        onError={() => {
          setError(true);
        }}
      />
      <div>{wordsToUppercase(name)}</div>
    </S.Card>
  );
};
