import axios from 'axios';

export default async function App() {
  const api = "https://jsonplaceholder.typicode.com/todos";
  const response = await axios.get(api)
  console.log(response);
  return <h1>Axios</h1>
}