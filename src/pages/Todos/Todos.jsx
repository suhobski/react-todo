import React, { useMemo, useState } from 'react';
// import PageButton from '../../components/PageButton/PageButton.style';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoItem from '../../components/TodoItem/TodoItem';
import { PaginationContainer, TodosContainer } from './Todos.style';

function Todos({ todos, isPendingTodos, error, submitTodo, removeTodo }) {
  // -------------------------------------------
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTodos = useMemo(() => {
    const startIndex = (currentPage - 1) * limit;
    const finishIndex = startIndex + limit;
    return todos.slice(startIndex, finishIndex);
  }, [todos, currentPage, limit]);

  const pagesNumbers = useMemo(() => {
    const numberOfPages = Math.ceil(todos.length / limit);
    const numbersArray = [];
    for (let i = 1; i <= numberOfPages; i += 1) {
      numbersArray.push(i);
    }
    return numbersArray;
  }, [todos, limit]);

  const handleChangeLimit = (e) => {
    const newLimit = Number(e.target.value);
    setLimit(newLimit);
    setCurrentPage(1);
  };

  // -------------------------------------------
  return (
    <TodosContainer background="lightgreen">
      <TodoForm submitTodo={submitTodo} />
      {error && <p>{error.message}</p>}
      {isPendingTodos ? (
        <p>Загрузка</p>
      ) : (
        currentTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))
      )}
      <PaginationContainer>
        <label htmlFor="page-select">
          Current page:
          <select
            onChange={(e) => setCurrentPage(e.target.value)}
            id="page-select"
          >
            {pagesNumbers.map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="limit-select">
          Limit
          <select onChange={handleChangeLimit} id="limit-select">
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={todos.length}>All</option>
          </select>
        </label>
      </PaginationContainer>
    </TodosContainer>
  );
}

export default Todos;
