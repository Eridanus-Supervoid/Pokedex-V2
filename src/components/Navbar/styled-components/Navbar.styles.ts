import styled from 'styled-components';

interface NavbarProps {
  padding: string;
}

export const Navbar = styled.nav<NavbarProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding: ${(props) => props.padding};
  span {
    font-size: 1.5rem;
    font-weight: 700;
  }
  img {
    margin-right: 0.7rem;
    max-width: 2.5rem;
    filter: invert();
    margin-left: -6px;
  }
`;
