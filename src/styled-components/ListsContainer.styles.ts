import styled from 'styled-components';

interface ListContainerProps {
  long?: boolean;
}

export const ListContainer = styled.div<ListContainerProps>`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    ${({ long }) => (long ? 'minmax(20rem, 1fr)' : 'minmax(11rem, 1fr)')}
  );
  gap: 1rem;
  width: 100%;
  font-weight: 500;
  font-size: 1.2rem;
`;
