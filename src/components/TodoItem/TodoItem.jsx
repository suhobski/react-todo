import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  editTodoAction,
  setEditTodoNowAction,
} from '../../redux/actions/todosActions';
import Checkbox from '../Checkbox/Checkbox';
import TodoText from '../formComponents/TodoText.style';
import TodoInputText from '../formComponents/TodoInputText.style';
import {
  ButtonsContainer,
  Delete,
  EditSubmit,
  TodoContainer,
} from './TodoItem.style';

function TodoItem({ todo, removeTodo }) {
  const dispatch = useDispatch();
  const inputTitleRef = useRef();

  const handleChangeCompleted = () => {
    const completed = !todo.completed;
    let { title } = todo;
    if (inputTitleRef.current) {
      title = inputTitleRef.current.value;
    }
    const editedTodo = {
      ...todo,
      title,
      completed,
    };
    dispatch(editTodoAction(editedTodo));
  };

  const handleChangeTitle = () => {
    const currentTitle = inputTitleRef.current.value;
    if (!currentTitle) {
      return;
    }
    const editedTodo = {
      ...todo,
      title: currentTitle,
    };
    dispatch(editTodoAction(editedTodo));
  };

  const handleClickText = () => {
    dispatch(setEditTodoNowAction(todo.id));
  };

  const handleTitleKeyPress = (e) => {
    if (e.ctrlKey && e.code === 'Enter') {
      handleChangeTitle();
    }
  };

  return (
    <TodoContainer>
      <Checkbox
        checked={todo.completed}
        type="checkbox"
        onChange={handleChangeCompleted}
      />
      {todo?.isEditNow ? (
        <TodoInputText
          onKeyPress={handleTitleKeyPress}
          ref={inputTitleRef}
          type="text"
          name="title"
          defaultValue={todo.title}
          autoFocus
        />
      ) : (
        <TodoText onClick={handleClickText}>{todo.title}</TodoText>
      )}
      <ButtonsContainer>
        <EditSubmit
          visible={todo?.isEditNow ? 'visible' : 'hidden'}
          onClick={handleChangeTitle}
        />
        <Delete title="Удалить заметку" onClick={() => removeTodo(todo.id)} />
      </ButtonsContainer>
    </TodoContainer>
  );
}

export default TodoItem;
