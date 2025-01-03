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
  const handleExport = (fileName) => {
    const filePath = `/files/${fileName}`; // Adjust the path as per your file structure
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handleExport("communication_frequency_report.csv")} // Replace with your actual CV file name
          className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-4"
        >
          EXPORT CV
        </button>
        <button
          onClick={() => handleExport("communication_frequency_report.pdf")} // Replace with your actual PDF file name
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          EXPORT PDF
        </button>
      </div>
    </div>
  );
};

export default BarChart;
