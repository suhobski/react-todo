import styled from 'styled-components';

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  column-gap: 12px;
  margin: 6px 0;
  padding: 12px;
  background-color: ${(props) => props.background || '#fff'};
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

export default FormContainer;
