import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarChart = () => {
  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021"],
    datasets: [
      {
        label: "Revenue",
        data: [300, 400, 500, 700, 800],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
