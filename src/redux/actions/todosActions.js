import {
  ADD_TODO,
  EDIT_TODO,
  FETCH_ALL_TODOS,
  REMOVE_TODO,
  SET_EDIT_TODO_NOW,
} from "./actionTypes";

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

export function editTodoAction(todo) {
  return {
    type: EDIT_TODO,
    todo,
  };
}

export function setEditTodoNowAction(todoId) {
  return {
    type: SET_EDIT_TODO_NOW,
    todoId,
  };
}
