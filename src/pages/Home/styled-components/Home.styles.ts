import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  background-color: var(--red);
  color: white;
  padding: 1.5rem;
  clip-path: ellipse(100% 70% at 50% 30%);
`;

export const Menu = styled.menu`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.3rem;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5rem 0 6rem;
`;
