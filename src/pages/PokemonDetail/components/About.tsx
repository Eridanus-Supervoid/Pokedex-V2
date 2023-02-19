import { useAppSelector } from '@/redux';
import { AboutContainer } from './styled-components';

export const About: React.FC = () => {
  const { height, description } = useAppSelector(
    (state) => state.pokedex.pokemonDetail
  );

  return (
    <AboutContainer>
      <p>"{description}"</p>
      <p>Height: {height.meters}</p>
    </AboutContainer>
  );
};
