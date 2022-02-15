import React from 'react';
import {
  HeaderContainer,
  HeaderTitle,
  Navigation,
  NavLink,
} from './Header.style';

function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>React todo</HeaderTitle>
      <Navigation>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/todos">Список todo</NavLink>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
