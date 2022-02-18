import React from 'react';
import Pagination from '../../components/Pagination/Pagination';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoItem from '../../components/TodoItem/TodoItem';
import usePagination from '../../hooks/usePagination';
import TodosContainer from './Todos.style';

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
      <TodoForm submitTodo={submitTodo} />
      {error && <p>{error.message}</p>}
      {isPendingTodos ? (
        <p>Загрузка</p>
      ) : (
        currentTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))
      )}
      <Pagination
        pagesNumbers={pagesNumbers}
        currentPage={currentPage}
        changeLimit={changeLimit}
        changeCurrentPage={changeCurrentPage}
        allTodosCount={allTodosCount}
      />
    </TodosContainer>
  );
}

export default Todos;
