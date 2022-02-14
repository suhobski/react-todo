import styled from "styled-components";
import { ReactComponent as EditIcon } from "../../assets/img/edit.svg";
import { ReactComponent as DeleteIcon } from "../../assets/img/delete.svg";

export const TodoContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  column-gap: 12px;
  margin: 6px 0;
  padding: 12px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  transition: all 0.4 ease-in;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Edit = styled(EditIcon)`
  padding: 4px;
  border-radius: 8px;
  background-color: lightblue;
  cursor: pointer;

  &:hover {
    background-color: lightskyblue;
  }
`;

export const Delete = styled(DeleteIcon)`
  width: 24px;
  height: 24px;
  margin-left: 12px;
  padding: 4px;
  border-radius: 8px;
  background-color: lightcoral;
  cursor: pointer;

  &:hover {
    background-color: coral;
  }
`;
