import { IElementWithId } from '@/models';
import { API_IMG_URL } from '@/services';
import { wordsToUppercase } from '@/utils';
import { useFavoritePokemon } from '@/hooks';
import * as S from './styled-components';
import iconOpen from '@/assets/images/icon-open-pokeball.png';
import iconClose from '@/assets/images/icon-close-pokeball.png';

interface IPokemonCardProps {
  pokemon: IElementWithId;
}

export const PokemonCard: React.FC<IPokemonCardProps> = ({ pokemon }) => {
  const { id, name } = pokemon;
  const { isFavorite, addFavoritePokemon, deleteFavoritePokemon } =
    useFavoritePokemon(id!);

  const handleClick = () => {
    isFavorite ? deleteFavoritePokemon(+id!) : addFavoritePokemon(pokemon);
  };

  return (
    <S.Card>
      <S.HeaderContainer>
        <S.FavoriteToggle
          src={isFavorite ? iconClose : iconOpen}
          alt="open pokeball"
          onClick={handleClick}
        />
        <S.Id>{`N°${id}`}</S.Id>
      </S.HeaderContainer>
      <img src={`${API_IMG_URL}${id}.png`} alt={`${name} image`} />
      <div>{wordsToUppercase(name)}</div>
    </S.Card>
  );
};
