import React from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import {
  ButtonsContainer,
  Delete,
  Edit,
  TodoContainer,
} from "./TodoItem.style";

const TodoItem = ({ todo, removeTodo }) => {
  return (
    <TodoContainer key={todo.id}>
      <Checkbox
        defaultChecked={todo.completed}
        type="checkbox"
        name="completed"
        id={todo.completed + todo.id}
      />
      <span>
        {todo.title} - {todo.id}
      </span>
      <ButtonsContainer>
        <Edit />
        <Delete onClick={() => removeTodo(todo.id)} />
      </ButtonsContainer>
    </TodoContainer>
  );
};

export default TodoItem;
