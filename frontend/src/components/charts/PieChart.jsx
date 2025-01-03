import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Tooltip, Legend, ArcElement);

const PieChart = () => {
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
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full max-w-[400px] mx-auto">
      <Pie data={data} />
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handleExport("engagement_effectiveness_report.csv")} // Replace with your actual CV file name
          className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-4"
        >
          EXPORT CV
        </button>
        <button
          onClick={() => handleExport("All Companies Engagement Effectiveness Report.pdf")} // Replace with your actual PDF file name
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          EXPORT PDF
        </button>
      </div>
    </div>
  );
};

export default PieChart;
