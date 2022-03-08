import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #65655a;

  @media (max-width: 470px) {
    flex-direction: column;
  }
`;

export const HeaderTitle = styled.h1`
  user-select: none;
  cursor: default;
`;

export const Navigation = styled.nav`
  display: flex;
  padding: 8px;
  list-style-type: none;
`;

export const NavLink = styled(Link)`
  margin-left: 12px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;
