import React, { useRef } from "react";

const Todos = ({ todos, isPendingTodos, submitTodo, removeTodo }) => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    submitTodo(data);
    formRef.current.reset();
  };

  return (
    <section>
      <h2>Todos page</h2>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input type="checkbox" name="completed" id="completed" />
        <input type="number" name="userId" id="userId" />
        <input type="text" name="title" id="title" />
        <button type="submit">Add todo</button>
      </form>
      {isPendingTodos && <p>Загрузка</p>}
      {todos.map((todo) => (
        <div key={todo.id} onClick={() => removeTodo(todo.id)}>
          <input
            defaultChecked={todo.completed}
            type="checkbox"
            name="completed"
            id={todo.completed + todo.id}
          />
          {todo.title} - {todo.id}
        </div>
      ))}
    </section>
  );
};

export default Todos;
