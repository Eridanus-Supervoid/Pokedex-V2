import styled from 'styled-components';

export const Error = styled.p`
  text-align: center;
  font-weight: 600;
`;

export const ErrorMessage = () => {
  return (
    <Error>
      Ooops We're experiencing some issues. <br /> Please try again later!
    </Error>
  );
};
