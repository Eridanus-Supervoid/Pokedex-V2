import { IElementWithId } from '@/models';
import { API_IMG_URL } from '@/services';
import { wordsToUppercase } from '@/utils';
import * as S from './styled-components';

interface IPokemonCardProps {
  pokemon: IElementWithId;
}

export const PokemonCard: React.FC<IPokemonCardProps> = ({ pokemon }) => {
  const { id, name } = pokemon;

  return (
    <S.Card>
      <S.Id>{`N°${id}`}</S.Id>
      <img src={`${API_IMG_URL}${id}.png`} alt={`${name} image`} />
      <div>{wordsToUppercase(name)}</div>
    </S.Card>
  );
};
