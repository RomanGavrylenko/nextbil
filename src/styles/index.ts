import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html, #root {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  * {
      box-sizing: border-box;
  }

  figure {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
