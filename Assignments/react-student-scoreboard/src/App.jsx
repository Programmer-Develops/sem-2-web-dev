import { useEffect, useState } from 'react'
import './App.css'
import Register from './Components/Register'
import Records from './Components/Records'
import Analytics from './Components/Analytics'

const STORAGE_KEY = 'student-scoreboard-students'

function App() {
  const [students, setStudents] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch (error) {
      console.warn('Failed to load students from localStorage:', error)
      return []
    }
  });
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

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(students)); // reason of using storage key is to avoid conflict with other localStorage data and to make it clear what this data represents. if we give no key or a generic key, it could potentially overwrite or be overwritten by other data in localStorage, leading to bugs or data loss. using a specific key also makes it easier to manage and debug the stored data.
    } catch (error) {
      console.warn('Failed to save students to localStorage:', error)
    }
  }, [students]);

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