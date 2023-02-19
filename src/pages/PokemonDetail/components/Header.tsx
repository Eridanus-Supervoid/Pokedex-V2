import { useAppSelector } from '@/redux';
import { Spinner, SpinnerContainer } from '@/styled-components';
import { useNavigate } from 'react-router-dom';
import { ImageContainer, Type, TypesContainer } from './styled-components';

export interface IDetailsHeaderProps {
  loadingImage: boolean;
  setLoadingImage: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<IDetailsHeaderProps> = ({
  loadingImage,
  setLoadingImage,
}) => {
  const { sprites, types } = useAppSelector(
    (state) => state.pokedex.pokemonDetail
  );
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/types/${types[0].name}`);
  };

  return (
    <>
      <ImageContainer>
        {loadingImage && (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        )}
        <img
          src={sprites.default}
          onLoad={() => setLoadingImage(false)}
          alt="front"
        />
      </ImageContainer>
      <TypesContainer>
        {types.map((types) => (
          <Type
            pokemonType={types.name}
            key={types.name}
            type="button"
            onClick={handleClick}
          >
            {types.name}
          </Type>
        ))}
      </TypesContainer>
    </>
  );
};
