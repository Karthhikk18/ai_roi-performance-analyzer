import { motion } from "framer-motion";
import "./KPICards.css";

export default function KPICards({ cost, benefit, roi }) {
  return (
    <div className="kpi-grid">
      <motion.div
        className="kpi-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <p className="kpi-title">Cost</p>
        <h2>₹{cost}</h2>
      </motion.div>

      <motion.div
        className="kpi-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p className="kpi-title">Benefit</p>
        <h2>₹{benefit}</h2>
      </motion.div>

      <motion.div
        className={`kpi-card roi ${roi >= 0 ? "positive" : "negative"}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="kpi-title">ROI</p>
        <h2>{roi}%</h2>
      </motion.div>
    </div>
  );
}
