import * as S from './styled-components';
import pokeball from '../../assets/images/icon-pokeball.png';
import { useNavigate } from 'react-router-dom';

interface INavProps {
  name?: string;
  to?: string;
}

export const Navbar: React.FC<INavProps> = ({ name, to }) => {
  const isHome = window.location.pathname === '/';
  const navigate = useNavigate();

  return (
    <S.Navbar>
      {isHome ? (
        <>
          <img src={pokeball} alt="pokeball" />
          <span>Pokedex</span>
        </>
      ) : (
        <>
          <button
            onClick={() => navigate(to!)}
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
