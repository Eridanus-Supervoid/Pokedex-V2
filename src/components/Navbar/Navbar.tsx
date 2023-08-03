import { useNavigation } from '@/hooks';
import * as S from './styled-components';
import pokeball from '../../assets/images/icon-pokeball.png';

interface INavProps {
  name?: string;
  padding?: string;
}

export const Navbar: React.FC<INavProps> = ({ name, padding = '0px' }) => {
  const isHome = window.location.pathname === '/';
  const { handleNavigate, handleNavigateHome } = useNavigation();

  return (
    <S.Navbar padding={padding}>
      {isHome ? (
        <>
          <img src={pokeball} alt="pokeball" />
          <span>Pokedex</span>
        </>
      ) : (
        <S.BaseNavbar>
          <div>
            <button onClick={handleNavigate} className="back-button">
              {'<'}
            </button>
            <span>{name}</span>
          </div>
          <button onClick={handleNavigateHome}>
            <img src={pokeball} alt="pokeball" />
          </button>
        </S.BaseNavbar>
      )}
    </S.Navbar>
  );
};
