import { useState } from 'react'
import './App.css'
import Register from './Components/Register'
import Records from './Components/Records'
import Analytics from './Components/Analytics'

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
      const updated = [...students];
      updated[editingIndex] = { ...updated[editingIndex], score: Number(editScore) };
      setStudents(updated);
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
      <div className="app-header">
        <h1>Student Scoreboard</h1>
        <p>Track, update, and analyze student performance</p>
      </div>

      <Analytics students={students} />

      <Register addStudent={addStudent} />

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
  );
}

export default App