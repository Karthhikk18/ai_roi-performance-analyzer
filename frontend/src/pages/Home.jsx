import PredictionForm from "../components/PredictionForm";

function Home() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", paddingTop: "80px" }}>
      <h1 style={{ textAlign: "center" }}>
        AI ROI Performance Analyzer
      </h1>

      <p style={{ textAlign: "center", opacity: 0.7 }}>
        Evaluate cost vs benefit of AI models
      </p>

      <PredictionForm />
    </div>
  );
}

export default Home;
