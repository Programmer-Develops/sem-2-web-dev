import axios from 'axios';

export default function App() {
  const api = "https://jsonplaceholder.typicode.com/todos";
  const response = axios.get(api)
  console.log(response);
  return <h1>Axios</h1>
}