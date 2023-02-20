import { useAppSelector } from '@/redux';
import { Spinner, SpinnerContainer } from '@/styled-components';
import { useNavigate } from 'react-router-dom';
import { ImageContainer, Type, TypesContainer } from './styled-components';

export interface IDetailsHeaderProps {
  loadingImage: boolean;
  onLoadImage?: () => void;
}

export const Header: React.FC<IDetailsHeaderProps> = ({
  loadingImage,
  onLoadImage,
}) => {
  const { sprites, types } = useAppSelector(
    (state) => state.pokedex.pokemonDetail
  );
  const navigate = useNavigate();

  const handleClick = (idx: number) => {
    navigate(`/types/${types[idx].name}`);
  };

  return (
    <>
      <ImageContainer>
        {loadingImage && (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        )}
        <img src={sprites.default} onLoad={onLoadImage} alt="front" />
      </ImageContainer>
      <TypesContainer>
        {types.map((types, idx) => (
          <Type
            pokemonType={types.name}
            key={types.name}
            type="button"
            onClick={() => handleClick(idx)}
          >
            {types.name}
          </Type>
        ))}
      </TypesContainer>
    </>
  );
};
