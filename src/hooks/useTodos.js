import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoAction,
  fetchAllTodosAction,
  removeTodoAction,
} from "../redux/actions/todosActions";
import { httpGetTodos } from "./requests";

function useTodos() {
  const todos = useSelector((state) => state.todos);
  const [isPendingTodos, setPendingTodos] = useState(false);
  const dispatch = useDispatch();

  const getTodos = useCallback(async () => {
    try {
      setPendingTodos(true);
      const todos = await httpGetTodos();
      dispatch(fetchAllTodosAction(todos));
    } catch (err) {
      console.log(err);
    } finally {
      setPendingTodos(false);
    }
  }, [dispatch]);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const submitTodo = useCallback(
    (data) => {
      const userId = data.get("userId");
      // TODO: change id to more specific
      const id = todos.length + 1;
      const title = data.get("title");
      const completed = Boolean(data.get("completed"));
      const newTodo = { userId, id, title, completed };
      dispatch(addTodoAction(newTodo));
    },
    [todos.length, dispatch]
  );

  const removeTodo = useCallback(
    (id) => {
      dispatch(removeTodoAction(id));
    },
    [dispatch]
  );

  return {
    todos,
    isPendingTodos,
    submitTodo,
    removeTodo,
  };
}

export default useTodos;
