import styled from 'styled-components';

const PaginationContainer = styled.div`
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

export default PaginationContainer;
