// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Register from './Components/Register'
import Records from './Components/Records'

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="app-container">
      <h1>Student Scoreboard</h1>
      <div className = 'register-student'>
        <Register addStudent={addStudent} />
      </div>
      <div className = 'records'>
        <Records students={students} />
      </div>
    </div>
  )
}

export default App
