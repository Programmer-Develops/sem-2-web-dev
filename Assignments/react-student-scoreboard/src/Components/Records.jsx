function Records({ students }) {
  return (
    <>
      <div>
        <h1>Student Records</h1>
      </div>

      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Status</th>
          <th>Update</th>
        </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.score}</td>
              <td>
                <span className={student.score >= 50 ? 'status-pass' : 'status-fail'}>
                  {student.score >= 50 ? 'Pass' : 'Fail'}
                </span>
              </td>
              <td><button className="edit-btn">Edit</button></td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </>
  );
}

export default Records;
