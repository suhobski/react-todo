import React from 'react';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoItem from '../../components/TodoItem/TodoItem';
import TodosContainer from './Todos.style';

function Todos({ todos, isPendingTodos, error, submitTodo, removeTodo }) {
  return (
    <TodosContainer background="lightgreen">
      <h2>Todos page</h2>
      <TodoForm submitTodo={submitTodo} />
      {error && <p>{error.message}</p>}
      {isPendingTodos ? (
        <p>Загрузка</p>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))
      )}
    </TodosContainer>
  );
}

export default Todos;
