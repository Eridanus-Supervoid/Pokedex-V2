import { useNavigation } from '@/hooks';
import * as S from './styled-components';
import pokeball from '../../assets/images/icon-pokeball.png';

interface INavProps {
  name?: string;
  to?: string;
  padding?: string;
}

export const Navbar: React.FC<INavProps> = ({ name, to, padding = '0px' }) => {
  const isHome = window.location.pathname === '/';
  const { handleNavigate } = useNavigation();

  return (
    <S.Navbar padding={padding}>
      {isHome ? (
        <>
          <img src={pokeball} alt="pokeball" />
          <span>Pokedex</span>
        </>
      ) : (
        <>
          <button
            onClick={handleNavigate}
            style={{ border: 'none', marginRight: '10px', background: 'none' }}
          >
            {'<'}
          </button>
          <span>{name}</span>
        </>
      )}
    </S.Navbar>
  );
};
