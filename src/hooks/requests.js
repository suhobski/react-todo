const API_URL = 'https://jsonplaceholder.typicode.com';

export async function httpGetTodos() {
  const responce = await fetch(`${API_URL}/todos`);
  const data = await responce.json();
  return data;
}

export default httpGetTodos;
