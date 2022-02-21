import styled from 'styled-components';

export const TodoContainer = styled.div`
  display: grid;
  grid-template-columns: auto minmax(120px, 1fr) auto;
  align-items: center;
  column-gap: 12px;
  margin: 6px 0;
  padding: 12px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
