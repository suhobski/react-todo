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
        <NavLink to="/react-todo">Home</NavLink>
        <NavLink to="/react-todo/todo-list">Todo list</NavLink>
        <NavLink to="/react-todo/sign-in">Sign In</NavLink>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
