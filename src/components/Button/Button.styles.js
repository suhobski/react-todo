import styled from 'styled-components';

const Button = styled.button`
  padding: 8px;
  background: lightgrey;
  text-transform: uppercase;
  outline: none;
  border: 1px solid #414141;
  border-radius: 4px;

  &:hover {
    background: #414141;
    color: lightgrey;
  }

  &:active {
    border-color: lightgrey;
  }
`;

export default Button;
