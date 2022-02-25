import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodoAction,
  fetchAllTodosAction,
  removeTodoAction,
} from '../redux/actions/todosActions';
import { httpGetTodos } from './requests';

function useTodos() {
  const todos = useSelector((state) => state.todos);
  const [isPendingTodos, setPendingTodos] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const getTodos = useCallback(async () => {
    try {
      setPendingTodos(true);
      const fetchedTodos = await httpGetTodos();
      dispatch(fetchAllTodosAction(fetchedTodos));
      console.log('fetch todos');
    } catch (err) {
      setError(err);
      console.log(err);
    } finally {
      setPendingTodos(false);
    }
  }, [dispatch]);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const submitTodo = useCallback(
    (newTodo) => {
      dispatch(addTodoAction(newTodo));
    },
    [dispatch]
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
    error,
    submitTodo,
    removeTodo,
  };
}

export default useTodos;
