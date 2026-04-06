import './App.css'
import Greet from './Components/Greet'

function App() {
  return (
    <div className = "App">
      <h1 style={{ color: 'blue' }}>React</h1>
      <p className={"text-center bg-orange-500 text-white"}>Tailwindcss</p>
      <Greet />
    </div>
  )
}

export default App
