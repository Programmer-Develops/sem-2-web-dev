import { useState } from 'react';

function Register({ addStudent }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsed = Number(score);
    if (name.trim() && score !== '' && parsed >= 0 && parsed <= 100) {
      addStudent({ name: name.trim(), score: parsed });
      setName('');
      setScore('');
    }
  };

  return (
    <div className="card">
      <div className="card-title">Add Student</div>
      <form className="form-row" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          min="0"
          max="100"
          required
        />
        <button type="submit" className="add-btn">Add</button>
      </form>
    </div>
  );
}

export default Register;