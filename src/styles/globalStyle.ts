import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --grey: #EFF2F5;
    --dark-grey: #EFF2F5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root, html, body {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: system-ui, -apple-system, system-ui, ".SFNSText-Regular", sans-serif;
    -webkit-font-smoothing: antialiased;
    background: var(--grey);
  }

  input {
    outline: none;
  }
`;

export default GlobalStyle;
