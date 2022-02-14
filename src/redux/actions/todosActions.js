import { ADD_TODO, FETCH_ALL_TODOS, REMOVE_TODO } from "./actionTypes";

export function fetchAllTodosAction(todos) {
  return {
    type: FETCH_ALL_TODOS,
    todos,
  };
}

export function addTodoAction(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

export function removeTodoAction(todoId) {
  return {
    type: REMOVE_TODO,
    todoId,
  };
}
