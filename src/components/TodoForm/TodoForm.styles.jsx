import styled from "styled-components";

export const TodoFormContainer = styled.form`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  column-gap: 12px;
  margin: 6px 0;
  padding: 12px;
  background-color: #e3fcea;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  transition: all 0.4 ease-in;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const TodoFormButton = styled.button`
  width: 60px;
  height: 24px;
  background-color: #9cffb7;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #84db9c;
  }
`;
