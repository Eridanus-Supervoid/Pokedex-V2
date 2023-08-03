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
  button {
    border: none;
    background: none;
    padding: 0;
  }
`;

export const BaseNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  div {
    display: flex;
    align-items: center;
  }
  .back-button {
    padding: 0 5px;
    margin-right: 10px;
  }
  img {
    filter: invert(0);
    margin: 0;
  }
`;
