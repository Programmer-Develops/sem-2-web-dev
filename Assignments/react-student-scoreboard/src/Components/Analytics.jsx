function Analytics({ students }) {
  const total = students.length;
  const passed = students.filter(s => s.score >= 40).length;
  const failed = total - passed;
  const average = total > 0
    ? (students.reduce((sum, s) => sum + s.score, 0) / total).toFixed(1)
    : null;
  const passRate = total > 0 ? Math.round((passed / total) * 100) : null;

  return (
    <div className="card">
      <div className="card-title">Analytics</div>
      <div className="stats-grid">
        <div className="stat">
          <div className="stat-num">{total}</div>
          <div className="stat-label">Total</div>
        </div>
        <div className="stat">
          <div className="stat-num">{average ?? '—'}</div>
          <div className="stat-label">Average</div>
        </div>
        <div className="stat pass">
          <div className="stat-num">{passed}</div>
          <div className="stat-label">Passed</div>
        </div>
        <div className="stat fail">
          <div className="stat-num">{failed}</div>
          <div className="stat-label">Failed</div>
        </div>
        <div className="stat">
          <div className="stat-num">{passRate !== null ? passRate + '%' : '—'}</div>
          <div className="stat-label">Pass rate</div>
        </div>
      </div>
      <div className="pass-bar-bg">
        <div
          className="pass-bar-fill"
          style={{ width: passRate !== null ? passRate + '%' : '0%' }}
        />
      </div>
    </div>
  );
}

export default Analytics;