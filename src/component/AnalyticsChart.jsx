import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";

const COLORS = [
  "#22c55e",
  "#3b82f6",
  "#ef4444"
];

const AnalyticsChart = ({ data }) => {

  return (

    <PieChart
      width={500}
      height={350}
    >

      <Pie
        data={data}
        dataKey="value"
        outerRadius={120}
        label
      >

        {
          data.map((entry, index) => (

            <Cell
              key={index}
              fill={COLORS[index]}
            />

          ))
        }

      </Pie>

      <Tooltip />

      <Legend />

    </PieChart>

  );

};

export default AnalyticsChart;