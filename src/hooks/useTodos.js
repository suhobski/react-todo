import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodoAction,
  fetchAllTodosAction,
  removeTodoAction,
} from '../redux/actions/todosActions';
import findCurrentId from '../utils/todosUtils';
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
    (data) => {
      const title = data.get('title');
      if (!title) {
        return;
      }

      const userId = data.get('userId');
      const id = findCurrentId(todos) + 1;
      const completed = Boolean(data.get('completed'));
      const newTodo = { userId, id, title, completed };
      dispatch(addTodoAction(newTodo));
    },
    [todos.length, todos, dispatch]
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
