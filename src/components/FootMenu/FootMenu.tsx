import * as S from './styled-components';
import iconHome from '@/assets/images/icon-pokedex.png';
import iconFavorites from '@/assets/images/icon-heart.png';
import iconHabitats from '@/assets/images/icon-pointer.png';
import iconTypes from '@/assets/images/icon-gear.png';
import { Link } from 'react-router-dom';

export const FootMenu: React.FC = () => {
  return (
    <S.Container>
      <Link to="/pokemons">
        <S.Image src={iconHome} alt="Home" />
      </Link>
      <Link to="/types">
        <S.Image src={iconTypes} alt="Types" />
      </Link>
      <Link to="/habitats">
        <S.Image src={iconHabitats} alt="Habitats" />
      </Link>
      <Link to="/favorites">
        <S.Image src={iconFavorites} alt="Favorites" />
      </Link>
    </S.Container>
  );
};
