import { ADD_TODO, FETCH_ALL_TODOS, REMOVE_TODO } from "../actions/actionTypes";

const defaultState = {
  todos: [],
};

export const todosReducer = (state = defaultState, action) => {
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
    default:
      return state;
  }
};
