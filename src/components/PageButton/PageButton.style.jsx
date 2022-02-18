import styled from 'styled-components';

const PageButton = styled.button.attrs({ type: 'button' })`
  width: 32px;
  margin: 8px;
  padding: 8px;
  border: 1px solid #5a5a65;
  border-radius: 4px;
  background-color: ${(props) => (props.current ? 'lightblue' : 'inferit')};
`;

export default PageButton;
