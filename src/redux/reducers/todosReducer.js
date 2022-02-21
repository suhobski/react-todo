import {
  ADD_TODO,
  EDIT_TODO,
  FETCH_ALL_TODOS,
  REMOVE_TODO,
  SET_EDIT_TODO_NOW,
} from '../actions/actionTypes';

const defaultState = {
  todos: [],
};

const todosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_ALL_TODOS:
      return { ...state, todos: state.todos.concat(action.todos) };

    case ADD_TODO: {
      const todos = [...state.todos];
      todos.unshift(action.todo);
      return { ...state, todos };
    }

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.todoId),
      };

    case EDIT_TODO: {
      const todos = state.todos.map((todo) => {
        if (todo.isEditNow) {
          todo.isEditNow = false;
        }
        return todo;
      });
      const currentTodo = todos.find((todo) => todo.id === action.todo.id);
      currentTodo.title = action.todo.title;
      currentTodo.completed = action.todo.completed;
      return { ...state, todos };
    }

    case SET_EDIT_TODO_NOW: {
      const todos = state.todos.map((todo) => {
        if (todo.id === action.todoId) {
          todo.isEditNow = !todo?.isEditNow;
        } else if (todo.isEditNow) {
          todo.isEditNow = false;
        }
        return todo;
      });
      return { ...state, todos };
    }

    default:
      return state;
  }
};

export default todosReducer;
