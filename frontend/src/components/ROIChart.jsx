import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
);

export default function ROIChart({ history }) {
  if (!history || history.length === 0) return null;

  const data = {
    labels: history.map((h) => h.time),
    datasets: [
      {
        label: "ROI %",
        data: history.map((h) => h.roi),
        borderColor: "#22d3ee",
        backgroundColor: "rgba(34,211,238,0.25)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return <Line data={data} />;
}
