import styled from 'styled-components';

export const Container = styled.menu`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.2);
  margin: 0;
  padding: 10px;
  border-radius: 50px 50px 0 0;
`;

export const Image = styled.img`
  height: 2.5rem;
  opacity: 0.7;
  padding-top: 3px;
`;
