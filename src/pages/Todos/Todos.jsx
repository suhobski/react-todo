import React from 'react';
import Pagination from '../../components/Pagination/Pagination';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoItem from '../../components/TodoItem/TodoItem';
import usePagination from '../../hooks/usePagination';
import { TodosContainer, Error } from './Todos.style';

function Todos({ isPendingTodos, error, submitTodo, removeTodo }) {
  const {
    currentTodos,
    pagesNumbers,
    currentPage,
    allTodosCount,
    changeLimit,
    changeCurrentPage,
  } = usePagination();

  return (
    <TodosContainer>
      <Pagination
        pagesNumbers={pagesNumbers}
        currentPage={currentPage}
        changeLimit={changeLimit}
        changeCurrentPage={changeCurrentPage}
        allTodosCount={allTodosCount}
      />
      <TodoForm submitTodo={submitTodo} />

      {isPendingTodos ? (
        <p>Загрузка</p>
      ) : (
        currentTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))
      )}
      {error && <Error>{error.message}</Error>}
    </TodosContainer>
  );
}

export default Todos;
