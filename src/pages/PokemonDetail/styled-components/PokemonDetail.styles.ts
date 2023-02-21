import styled from 'styled-components';

interface IContainerProps {
  pokemonType: string;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
`;

export const DetailsContainer = styled.section<IContainerProps>`
  display: flex;
  padding: 4rem 2rem;
  align-items: center;
  flex-direction: column;
  background-color: var(--${({ pokemonType }) => pokemonType});
  clip-path: ellipse(150% 100% at 50% 100%);
`;

export const MenuContainer = styled.div`
  display: flex;
  border-radius: 4rem;
  overflow: hidden;
  gap: 1px;
`;

export const MenuItem = styled.button<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  border: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  font-weight: 600;
  background-color: ${({ selected }) =>
    selected ? 'rgba(255,255,255,0.7)' : 'white'};
`;
