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
              <td>
                {editingIndex === index ? (
                  <input
                    type="number"
                    value={editScore}
                    onChange={(e) => onEditScoreChange(e.target.value)}
                    min="0"
                    max="100"
                    className="edit-input"
                  />
                ) : (
                  student.score
                )}
              </td>
              <td>
                <span
                  className={
                    student.score >= 50 ? "status-pass" : "status-fail"
                  }
                >
                  {student.score >= 50 ? "Pass" : "Fail"}
                </span>
              </td>
              <td>
                {editingIndex === index ? (
                  <div className="edit-actions">
                    <button className="save-btn" onClick={onSaveEdit}>
                      Save
                    </button>
                    <button className="cancel-btn" onClick={onCancelEdit}>
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    className="edit-btn"
                    onClick={() => onStartEdit(index)}
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Records;
