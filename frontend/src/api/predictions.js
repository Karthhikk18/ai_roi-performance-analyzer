const API_BASE_URL = "http://127.0.0.1:8000";

export async function createPrediction(data) {
  const response = await fetch(`${API_BASE_URL}/api/v1/predictions/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model_id: 1,
      cost: data.cost,
      benefit: data.benefit,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to analyze ROI");
  }

  return await response.json();
}
