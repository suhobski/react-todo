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
    color: #528e86;
  }

  body {
    min-height: 100vh;
  }

  ul, li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
