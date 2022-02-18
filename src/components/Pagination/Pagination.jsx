import React from 'react';
import PaginationContainer from './Pagination.style';

export default function Pagination({
  currentPage,
  pagesNumbers,
  allTodosCount,
  changeCurrentPage,
  changeLimit,
}) {
  return (
    <PaginationContainer>
      <label htmlFor="page-select">
        Current page:
        <select
          onChange={changeCurrentPage}
          value={currentPage}
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
        <select onChange={changeLimit} id="limit-select">
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={allTodosCount}>All</option>
        </select>
      </label>
    </PaginationContainer>
  );
}
