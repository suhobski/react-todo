import styled from 'styled-components';

export const TodoFormContainer = styled.form`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  column-gap: 12px;
  height: 50px;
  margin: 6px 0;
  padding: 12px;
  background-color: ${(props) => (props.isActive ? '#fff' : '#ddd')};
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;

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
    border: 1px solid #84db9c;
  }
`;
