import React from "react";
import { HeaderContainer, Navigation, NavLink } from "./Header.style.jsx";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>React todo</h1>
      <Navigation>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/todos">Список todo</NavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
