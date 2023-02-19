import styled from 'styled-components';

export const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid var(--flying);
    border-color: var(--flying) transparent var(--flying) transparent;
    animation: div 1.2s linear infinite;
  }
  @keyframes div {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: calc(50% - (80px / 2));
  left: calc(50% - (80px / 2));
`;
