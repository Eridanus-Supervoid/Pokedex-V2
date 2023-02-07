import styled from 'styled-components';

export const Id = styled.div`
  background-color: aquamarine;
  border-radius: 1.5rem;
  padding: 0.2rem 1.5rem;
  color: white;
  font-size: 0.8rem;
  margin-left: auto;
  line-height: 1.5rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  text-align: center;
  padding: 1.5rem;
  border-radius: 1.25rem;
  box-shadow: 3px 3px 7px #3b4cca;
  transition: 0.8s;
  :hover {
    box-shadow: 3px 3px 7px #ffde00;
  }
  img {
    margin: 0.5rem;
  }
  div {
    line-height: 1.5rem;
  }
`;
