// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Register from './Components/Register'
import Records from './Components/Records'

function App() {
  const [students, setStudents] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editScore, setEditScore] = useState('');

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const startEdit = (index) => {
    setEditingIndex(index);
    setEditScore(students[index].score.toString());
  };

  const saveEdit = () => {
    if (editingIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[editingIndex].score = Number(editScore);
      setStudents(updatedStudents);
      setEditingIndex(null);
      setEditScore('');
    }
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditScore('');
  };

  return (
    <div className="app-container">
      <h1>Student Scoreboard</h1>
      <div className = 'register-student'>
        <Register addStudent={addStudent} />
      </div>
      <div className='analysis'>
        <p>Total Students: {students.length}</p>
        <p>Average Score: {students.length > 0 ? (students.reduce((sum, student) => sum + student.score, 0) / students.length).toFixed(2) : 0}</p>
      </div>
      <div className='records'>
        <Records 
          students={students} 
          editingIndex={editingIndex}
          editScore={editScore}
          onEditScoreChange={setEditScore}
          onStartEdit={startEdit}
          onSaveEdit={saveEdit}
          onCancelEdit={cancelEdit}
        />
      </div>
    </div>
  )
}

export default App
