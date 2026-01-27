import { useState } from "react";
import { createPrediction } from "../api/predictions";

export default function PredictionForm() {
  const [cost, setCost] = useState("");
  const [benefit, setBenefit] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    setResult(null);

    try {
      const payload = {
        model_id: 1,
        input_ref: "frontend-test",
        cost: Number(cost),
        benefit: Number(benefit),
      };

      const response = await createPrediction(payload);

      // 🔥 Always compute ROI correctly
      const roi =
        payload.cost > 0
          ? (((payload.benefit - payload.cost) / payload.cost) * 100).toFixed(2)
          : 0;

      setResult({
        cost: payload.cost,
        benefit: payload.benefit,
        roi,
      });
    } catch (err) {
      setError("Failed to calculate ROI");
      console.error(err);
    }
  };

  return (
    <div>
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

      <button onClick={handleSubmit}>Analyze ROI</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Result:</h3>
          <p>Cost: {result.cost}</p>
          <p>Benefit: {result.benefit}</p>
          <p>
            ROI: <strong>{result.roi}%</strong>
          </p>
        </div>
      )}
    </div>
  );
}
