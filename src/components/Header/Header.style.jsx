import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  height: 50px;
  border-bottom: 2px solid #65655a;
`;

export const Navigation = styled.nav`
  & ul {
    display: flex;
  }

  & li {
    margin-left: 12px;
    text-transform: uppercase;

    &:hover {
      color: #65655a;
    }
  }
`;
