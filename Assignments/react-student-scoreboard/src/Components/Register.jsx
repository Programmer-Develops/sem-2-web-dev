import { useState } from 'react';

function Register({ addStudent }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && score) {
      addStudent({ name, score: Number(score) });
      setName('');
      setScore('');
    }
  };

  return (
    <div>
      <h2>Register Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
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
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default Register;