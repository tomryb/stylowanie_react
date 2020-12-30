import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  input {
    font-family: 'Roboto', sans-serif;

    &:focus {
      outline: 0;
    }
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;