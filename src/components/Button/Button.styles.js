import styled from 'styled-components';

const Button = styled.button`
  padding: 8px;
  background: ${(props) => (props.google ? '#4285f4' : 'lightgrey')};
  text-transform: uppercase;
  outline: none;
  border: 1px solid #414141;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #414141;
    color: lightgrey;
  }

  &:active {
    border-color: lightgrey;
  }
`;

export default Button;
