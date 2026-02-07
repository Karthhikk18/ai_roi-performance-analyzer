import { useState } from "react";
import PredictionForm from "./components/PredictionForm";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [history, setHistory] = useState([]);

  
  return (
    <>
      <Dashboard history={history} />
      <PredictionForm history={history} setHistory={setHistory} />
    </>
  );
}
