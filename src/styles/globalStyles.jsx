import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: inherit;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    min-height: 100vh;
    background-color: #eee;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
