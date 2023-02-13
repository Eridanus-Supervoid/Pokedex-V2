import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  :root {
    font-family: 'Montserrat', sans-serif;
    /* font-size: 16px; */
    font-size: calc(13px + (20.56 - 14) * ((100vw - 280px) / (3840 - 280)));
    line-height: 24px;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    // Main Colors
    --red: #F25355;
    --card-shadow: #3b4cca;
    --card-shadow-hover: #ff00fe;
    --list-shadow-hover: #b6b6b6;
    // Poke Colors
    --fire: #F6AD76;
    --water: #92B8F8;
    --grass: #8DDB8A;
    --electric: #F9D857;
    --psychic: #F394B5;
    --ice: #A9E6E7;
    --dragon: #B383FB;
    --dark: #A79188;
    --fairy: #F6B0C1;
    --normal: #A2A3A0;
    --fighting: #F2837D;
    --flying: #CFBAF8;
    --poison: #D583C5;
    --ground: #EEC770;
    --rock: #D8C27A;
    --bug: #C5D36B;
    --ghost: #A995BE;
    --steel: #3095A5;
    --shadow: #535353;
    --unknown: #4d6064;
  }

  html {
    --grey: #383f49;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  * {
    scroll-behavior: smooth;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 2;
  }

  @media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

h1 {
  font-size: 2rem;
  line-height: 3rem;
}

  /* .navbar {
    background-color: #CC0000 !important;
    padding: 10px 45px !important;
  }

  .navbar-brand {
    color: white !important;
    font-size: 25px !important;
    padding-left: 10px !important;
  }
  .dream-image {
    max-height:  250px;
    padding: 30px 15px 30px 30px;
  }
  .poke-description {
    font-size: 12px;
    padding: 10px 30px 20px 0px;
  }
  .modal-body {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  } */
`;
