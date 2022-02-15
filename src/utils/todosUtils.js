function findCurrentId(todos) {
  let currentId = 0;

  todos.forEach((todo) => {
    if (todo.id > currentId) {
      currentId = todo.id;
    }
  });

  return currentId;
}

export default findCurrentId;
