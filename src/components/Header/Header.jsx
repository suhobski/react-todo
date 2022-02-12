import React from "react";
import { HeaderContainer, Navigation } from "./Header.style.jsx";

const Header = () => {
  return (
    <HeaderContainer>
      <h2>React todo</h2>
      <Navigation>
        <ul>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/">Список todo</a>
          </li>
        </ul>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
