import styled from 'styled-components';

export const TodosContainer = styled.section`
  padding: 8px 16px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;

  & > label:first-child {
    margin-right: 30px;
  }

  & select {
    margin-left: 8px;
  }
`;

// export const PaginationText = styled.label`
//   display: inline-block;
// `;
