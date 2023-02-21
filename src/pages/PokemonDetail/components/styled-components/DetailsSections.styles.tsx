import styled from 'styled-components';

interface IContainerProps {
  pokemonType: string;
}

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: white;
  padding: 2rem 0;
  p {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.7rem;
    margin: 0;
  }
`;

export const MeasuresContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 90%;
  row-gap: 0.5rem;
  span {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const HabitatContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 1.5rem;
  }
`;

export const SpecialStatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

export const SpecialStatus = styled.div<{ special: boolean }>`
  display: flex;
  padding: 0.2rem 2rem;
  border-radius: 1.5rem;
  background-color: var(
    --${({ special }) => (special ? 'card-shadow-hover' : 'unknown')}
  );
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

export const Habitat = styled.button<IContainerProps>`
  display: flex;
  padding: 0.2rem 2rem;
  border-radius: 1.5rem;
  margin: 0 0.8rem;
  background-color: var(--${({ pokemonType }) => pokemonType});
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  border: 2px solid white;
  cursor: pointer;
`;

export const MeasuredValue = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  max-height: 400px;
  justify-content: center;
  align-items: center;
  img {
    padding: 0 3rem 0;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const TypesContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 2rem;
`;

export const Type = styled.button<IContainerProps>`
  display: flex;
  padding: 0.2rem 2rem;
  border-radius: 1.5rem;
  margin: 0 0.8rem;
  background-color: var(--${({ pokemonType }) => pokemonType});
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  border: 0;
  cursor: pointer;
`;
