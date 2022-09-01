import { Bar } from "react-chartjs-2";
import ChartJS from "chart.js/auto";

export const BarChart = () => {
  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril"],
    datasets: [
      {
        label: "Egreso Mensual",
        data: [600, 300, 400, 800],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar data={data} />;
};
