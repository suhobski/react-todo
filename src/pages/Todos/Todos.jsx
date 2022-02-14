import React from "react";
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoItem from "../../components/TodoItem/TodoItem";
import { TodoContainer } from "../../components/TodoItem/TodoItem.style";
import { TodosContainer } from "./Todos.style";

const Todos = ({ todos, isPendingTodos, submitTodo, removeTodo }) => {
  return (
    <TodosContainer background="lightgreen">
      <h2>Todos page</h2>
      <TodoForm submitTodo={submitTodo} />
      {isPendingTodos ? (
        <p>Загрузка</p>
      ) : (
        todos.map((todo) => <TodoItem todo={todo} removeTodo={removeTodo} />)
      )}
    </TodosContainer>
  );
};

export default Todos;
