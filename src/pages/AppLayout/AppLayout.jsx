import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import useTodos from '../../hooks/useTodos';
import Home from '../Home/Home';
import Todos from '../Todos/Todos';
import AppContainer from './AppLayout.style';

function AppLayout() {
  const { todos, isPendingTodos, error, submitTodo, removeTodo } = useTodos();

  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="react-todo" element={<Home />} />
        <Route
          path="react-todo/todo-list"
          element={
            <Todos
              todos={todos}
              isPendingTodos={isPendingTodos}
              submitTodo={submitTodo}
              removeTodo={removeTodo}
              error={error}
            />
          }
        />
        <Route path="*" element={<Navigate to="react-todo" />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default AppLayout;
