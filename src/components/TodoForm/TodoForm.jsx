import React, { useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import Checkbox from '../Checkbox/Checkbox';
import FormContainer from '../formComponents/FormContainer';
import TodoInputText from '../formComponents/TodoInputText.style';
import { TodoFormButton } from './TodoForm.styles';

function TodoForm({ submitTodo }) {
  const [isActive, setActive] = useState(false);
  const formRef = useRef();
  const completedRef = useRef();
  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    if (!title) {
      titleRef.current.focus();
      return;
    }

    const completed = completedRef.current.checked;
    const id = nanoid();
    const newTodo = { id, title, completed };

    submitTodo(newTodo);
    formRef.current.reset();
    titleRef.current.blur();
    setActive(false);
  };

  const handleFormClick = () => {
    titleRef.current.focus();
    if (isActive) {
      return;
    }
    setActive(true);
  };

  const handleTitleKeyPress = (e) => {
    if (e.ctrlKey && e.code === 'Enter') {
      titleRef.current.blur();
      handleSubmit(e);
    }
  };

  return (
    <FormContainer
      onSubmit={handleSubmit}
      onClick={handleFormClick}
      ref={formRef}
      background={isActive ? '#fff' : '#ddd'}
    >
      {isActive && (
        <Checkbox
          ref={completedRef}
          type="checkbox"
          name="completed"
          id="completed"
        />
      )}
      <TodoInputText
        onKeyPress={handleTitleKeyPress}
        ref={titleRef}
        type="text"
        name="title"
        id="title"
        placeholder="write a new task"
      />
      {isActive && <TodoFormButton type="submit">Add</TodoFormButton>}
    </FormContainer>
  );
}

export default TodoForm;
