import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

const TodoInputText = styled(TextareaAutosize)`
  font-size: 18px;
  font-family: inherit;
  border: none;
  background-color: inherit;
  outline: none;
  resize: none;
  cursor: pointer;

  &:focus {
    color: #111;
  }
`;

export default TodoInputText;
