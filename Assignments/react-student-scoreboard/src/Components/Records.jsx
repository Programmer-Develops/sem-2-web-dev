function Records({
  students,
  editingIndex,
  editScore,
  onEditScoreChange,
  onStartEdit,
  onSaveEdit,
  onCancelEdit,
}) {
  return (
    <div className="card">
      <div className="card-title">Student Records</div>

      {students.length === 0 ? (
        <div className="empty-state">No students yet — add one above.</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => {
              const isPass = student.score >= 40;
              return (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>
                    {editingIndex === index ? (
                      <input
                        type="number"
                        className="edit-input"
                        value={editScore}
                        onChange={(e) => onEditScoreChange(e.target.value)}
                        min="0"
                        max="100"
                        autoFocus
                      />
                    ) : (
                      <span className="score-mono">{student.score}</span>
                    )}
                  </td>
                  <td>
                    <span className={`badge ${isPass ? 'pass' : 'fail'}`}>
                      {isPass ? 'Pass' : 'Fail'}
                    </span>
                  </td>
                  <td>
                    {editingIndex === index ? (
                      <div className="edit-actions">
                        <button className="btn-sm save" onClick={onSaveEdit}>Save</button>
                        <button className="btn-sm cancel" onClick={onCancelEdit}>Cancel</button>
                      </div>
                    ) : (
                      <button className="btn-sm" onClick={() => onStartEdit(index)}>Edit</button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Records;