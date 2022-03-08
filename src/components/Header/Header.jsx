import React from 'react';

import { auth } from '../../firebase/firebase.utils';

import {
  HeaderContainer,
  HeaderTitle,
  Navigation,
  NavLink,
} from './Header.style';

function Header({ currentUser }) {
  console.log('currentUser', currentUser);

  return (
    <HeaderContainer>
      <HeaderTitle>React todo</HeaderTitle>
      <Navigation>
        <NavLink to="/react-todo">Home</NavLink>
        <NavLink to="/react-todo/todo-list">Todo list</NavLink>
        {currentUser ? (
          <NavLink as="div" onClick={() => auth.signOut()}>
            Sign Out
          </NavLink>
        ) : (
          <NavLink to="/react-todo/sign-in">Sign In</NavLink>
        )}
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
