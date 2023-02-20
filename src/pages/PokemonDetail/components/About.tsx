import { useAppSelector } from '@/redux';
import { AboutContainer } from './styled-components';

export const About: React.FC = () => {
  const { height, description, weight } = useAppSelector(
    (state) => state.pokedex.pokemonDetail
  );

  return (
    <AboutContainer>
      <p>"{description}"</p>
      <p>Height: {height.meters}</p>
      <p>Weight: {weight}</p>
    </AboutContainer>
  );
};
