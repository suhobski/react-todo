import React, { useRef } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import TodoInputText from '../formComponents/TodoInputText.style';
import { TodoFormButton, TodoFormContainer } from './TodoForm.styles';

function TodoForm({ submitTodo }) {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    submitTodo(data);
    formRef.current.reset();
  };

  return (
    <TodoFormContainer onSubmit={handleSubmit} ref={formRef}>
      <Checkbox type="checkbox" name="completed" id="completed" />
      <TodoInputText
        type="text"
        name="title"
        id="title"
        placeholder="new todo..."
      />
      <TodoFormButton type="submit">Add</TodoFormButton>
    </TodoFormContainer>
  );
}

export default TodoForm;
