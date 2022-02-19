import React, { useRef, useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import TodoInputText from '../formComponents/TodoInputText.style';
import { TodoFormButton, TodoFormContainer } from './TodoForm.styles';

function TodoForm({ submitTodo }) {
  const [isActive, setActive] = useState(false);
  const formRef = useRef();
  const inputTextRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const title = data.get('title');
    if (!title) {
      inputTextRef.current.focus();
      return;
    }
    submitTodo(data);
    formRef.current.reset();
    inputTextRef.current.blur();
    setActive(false);
  };

  const handleFormClick = () => {
    inputTextRef.current.focus();
    if (isActive) {
      return;
    }
    setActive(true);
  };

  return (
    <TodoFormContainer
      onSubmit={handleSubmit}
      onClick={handleFormClick}
      ref={formRef}
      isActive={isActive}
    >
      {isActive && <Checkbox type="checkbox" name="completed" id="completed" />}
      <TodoInputText
        ref={inputTextRef}
        type="text"
        name="title"
        id="title"
        placeholder="write a new task"
      />
      {isActive && <TodoFormButton type="submit">Add</TodoFormButton>}
    </TodoFormContainer>
  );
}

export default TodoForm;
