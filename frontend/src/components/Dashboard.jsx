import "./Dashboard.css";
export default function Dashboard({ history }) {
  const totalRuns = history.length;

  const avgROI =
    totalRuns === 0
      ? 0
      : (
          history.reduce((sum, h) => sum + h.roi, 0) / totalRuns
        ).toFixed(1);

  const maxROI =
    totalRuns === 0 ? 0 : Math.max(...history.map((h) => h.roi));

  const minROI =
    totalRuns === 0 ? 0 : Math.min(...history.map((h) => h.roi));

  return (
    <div className="dashboard">
      <div className="dash-card">
        <span>Total Runs</span>
        <strong>{totalRuns}</strong>
      </div>

      <div className="dash-card">
        <span>Average ROI</span>
        <strong className="sky">{avgROI}%</strong>
      </div>

      <div className="dash-card">
        <span>Max ROI</span>
        <strong className="sky">{maxROI}%</strong>
      </div>

      <div className="dash-card">
        <span>Min ROI</span>
        <strong>{minROI}%</strong>
      </div>
    </div>
  );
}
