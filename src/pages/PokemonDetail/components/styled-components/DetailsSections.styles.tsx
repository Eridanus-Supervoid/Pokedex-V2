import styled from 'styled-components';

interface IContainerProps {
  pokemonType: string;
}

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 1em 0;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  max-height: 500px;
  justify-content: center;
  align-items: center;
  img {
    padding: 3rem 3rem 0;
    max-width: 100%;
  }
`;

export const TypesContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 0 2rem;
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
