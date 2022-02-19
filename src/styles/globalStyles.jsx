import { createGlobalStyle } from 'styled-components';

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

  /* убирает изменение ширины страницы при появлении/удалении 
  полосы прокрутки */
  html {
    width:100vw;
    overflow-x:hidden;
  }
  
  body {
    min-height: 100vh;
    background-color: #eee;
  }
  
  a {
    text-decoration: none;
  }

  select {
    font-size: inherit;
  }
`;

export default GlobalStyle;
