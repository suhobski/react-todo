import styled from 'styled-components';

const TodoInputText = styled.input.attrs({ type: 'text' })`
  font-size: 18px;
  border: none;
  background-color: inherit;
  outline: none;
  cursor: pointer;

  &:focus {
    color: #111;
  }
`;

export default TodoInputText;
