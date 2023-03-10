import styled from 'styled-components';

interface LinkContainerProps {
  bgColor?: string;
}

export const LinkContainer = styled.div<LinkContainerProps>`
  background-color: ${({ bgColor }) =>
    bgColor ? `var(--${bgColor})` : 'var(--red)'};
  width: 100%;
  padding: 0.9rem 1.4rem;
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 2rem;
  color: white;
  transition: 0.5s;
  :hover {
    box-shadow: 3px 3px 7px var(--list-shadow-hover);
    transform: scale(1.03);
  }
`;
