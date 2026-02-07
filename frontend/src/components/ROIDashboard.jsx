import html2canvas from "html2canvas";
import ROIChart from "./ROIChart";

export default function ROIDashboard({ history }) {
  const downloadChart = async () => {
    const chart = document.getElementById("roi-chart");
    const canvas = await html2canvas(chart);
    const link = document.createElement("a");
    link.download = "roi-chart.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>ROI Dashboard 📊</h2>

      <div id="roi-chart">
        <ROIChart history={history} />
      </div>

      <button
        onClick={downloadChart}
        style={{
          marginTop: "12px",
          padding: "10px 16px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Download Chart 📥
      </button>
    </div>
  );
}
