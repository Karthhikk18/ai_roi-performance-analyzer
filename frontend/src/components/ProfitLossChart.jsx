import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function ProfitLossChart({ history }) {
  const data = history.map((item, index) => ({
    name: `Run ${index + 1}`,
    profit: item.benefit - item.cost,
  }));

  return (
    <div className="chart animate-in">
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Bar dataKey="profit" fill="#9e9e9e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
