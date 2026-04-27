import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MyAPI() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const api = 'https://jsonplaceholder.typicode.com/todos';

    async function fetchTodos() {
      try {
        const response = await axios.get(api);
        setTodos(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchTodos();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error loading data</h1>;

  return (
    <div>
      <h1>Axios Todo Count: {todos.length}</h1>
      <ul>
        {todos.slice(0, 5).map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}