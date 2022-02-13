import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 2px solid #65655a;

  @media (max-width: 470px) {
    flex-direction: column;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  margin-top: 8px;
  padding: 8px;
  list-style-type: none;
`;

export const NavLink = styled(Link)`
  margin-left: 12px;
  text-transform: uppercase;

  &:hover {
    color: grey;
  }
`;
