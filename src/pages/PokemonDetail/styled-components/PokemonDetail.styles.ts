import styled from 'styled-components';

interface IContainerProps {
  pokemonType: string;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  height: 1100px;
  border: solid 1px black;
  /* filter: drop-shadow(
    0px -100px 500px var(--${({ pokemonType }) => pokemonType})
  ); */
`;

export const Carousel = styled.div`
  display: flex;
  padding: 2rem 0 0;
  width: 100%;
  img {
    width: 100%;
  }
`;

export const DetailsContainer = styled.section<IContainerProps>`
  display: flex;
  flex-direction: column;
  height: 700px;
  background-color: var(--${({ pokemonType }) => pokemonType});
  clip-path: ellipse(100% 100% at 50% 100%);
`;
