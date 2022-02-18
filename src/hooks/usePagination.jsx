import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

export default function usePagination() {
  const todos = useSelector((state) => state.todos);
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

  const allTodosCount = useMemo(() => todos.length, [todos]);

  const changeLimit = (e) => {
    const newLimit = Number(e.target.value);
    setLimit(newLimit);
    setCurrentPage(1);
  };

  const changeCurrentPage = (e) => {
    setCurrentPage(e.target.value);
  };

  return {
    currentTodos,
    pagesNumbers,
    currentPage,
    allTodosCount,
    changeLimit,
    changeCurrentPage,
  };
}
