import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  editTodoAction,
  setEditTodoNowAction,
} from '../../redux/actions/todosActions';
import Checkbox from '../Checkbox/Checkbox';
import {
  CancelButton,
  DeleteButton,
  EditButton,
} from '../formComponents/formButtons';
import FormContainer from '../formComponents/FormContainer';
import TodoInputText from '../formComponents/TodoInputText.style';
import { ButtonsContainer } from './TodoItem.style';

function TodoItem({ todo, removeTodo }) {
  const dispatch = useDispatch();
  const completedRef = useRef();
  const titleRef = useRef();

  const handleSubmit = () => {
    const completed = completedRef.current.checked;
    const title = titleRef.current.value;

    if (!title) {
      return;
    }

    const editedTodo = {
      ...todo,
      title,
      completed,
    };

    dispatch(editTodoAction(editedTodo));
  };

  const handleTitleFocus = () => {
    if (todo?.isEditNow) {
      return;
    }
    dispatch(setEditTodoNowAction(todo.id));
  };

  const handleTitleKeyPress = (e) => {
    if (e.ctrlKey && e.code === 'Enter') {
      titleRef.current.blur();
      handleSubmit();
    }
  };

  const handleCancelClick = () => {
    titleRef.current.value = todo.title;
    dispatch(setEditTodoNowAction(todo.id));
  };

  return (
    <FormContainer as="form" onSubmit={handleSubmit}>
      <Checkbox
        ref={completedRef}
        defaultChecked={todo.completed}
        value="completed"
        onChange={handleSubmit}
      />
      <TodoInputText
        onClick={handleTitleFocus}
        onKeyPress={handleTitleKeyPress}
        ref={titleRef}
        name="title"
        defaultValue={todo.title}
      />
      {todo?.isEditNow ? (
        <ButtonsContainer>
          <EditButton onClick={handleSubmit} />
          <CancelButton onClick={handleCancelClick} />
        </ButtonsContainer>
      ) : (
        <ButtonsContainer>
          <DeleteButton onClick={() => removeTodo(todo.id)} />
        </ButtonsContainer>
      )}
    </FormContainer>
  );
}

export default TodoItem;
