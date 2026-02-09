import { useState } from "react";
import "./PredictionForm.css";
import ROITrendChart from "./ROITrendChart";
import ProfitLossChart from "./ProfitLossChart";

export default function PredictionForm() {
  const [cost, setCost] = useState("");
  const [benefit, setBenefit] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleAnalyze = () => {
    if (!cost || !benefit || Number(cost) <= 0) return;

    const roi = ((benefit - cost) / cost) * 100;

    const entry = {
      cost: Number(cost),
      benefit: Number(benefit),
      roi: Number(roi.toFixed(2)),
    };

    setResult(entry);
    setHistory((prev) => [...prev, entry]);
  };

  return (
    <div className="page-center">
      <div className="roi-card">
        <h1>AI ROI Performance Analyzer</h1>
        <p>Evaluate cost vs benefit of AI models</p>

        <div className="input-row">
          <input
            type="number"
            placeholder="Cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
          <input
            type="number"
            placeholder="Benefit"
            value={benefit}
            onChange={(e) => setBenefit(e.target.value)}
          />
        </div>

        <button onClick={handleAnalyze}>Analyze ROI 🚀</button>

        {result && (
          <div className="result animate-in">
            <div>Cost: ₹{result.cost}</div>
            <div>Benefit: ₹{result.benefit}</div>
            <div className="roi">ROI: {result.roi}%</div>
          </div>
        )}

        {history.length > 0 && (
          <div className="charts-inside">
            <div className="chart-box">
              <ROITrendChart history={history} />
            </div>

            <div className="chart-box" style={{ marginTop: "24px" }}>
              <ProfitLossChart history={history} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
