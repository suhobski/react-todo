import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import useTodos from "../../hooks/useTodos";
import Home from "../Home/Home";
import Todos from "../Todos/Todos";
import { AppContainer } from "./AppLayout.style";

const AppLayout = () => {
  const { todos, isPendingTodos, submitTodo, removeTodo } = useTodos();

  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/todos"
          element={
            <Todos
              todos={todos}
              isPendingTodos={isPendingTodos}
              submitTodo={submitTodo}
              removeTodo={removeTodo}
            />
          }
        />
      </Routes>
      <Footer />
    </AppContainer>
  );
};

export default AppLayout;
