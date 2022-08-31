import { Doughnut } from "react-chartjs-2";
import ChartJS from "chart.js/auto";

export const DonutChart = () => {
  const data = {
    labels: ["Habitada", "Sin habitar", "Baldío"],
    datasets: [
      {
        label: "Ingresos Mensuales",
        data: [600, 300, 400],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Doughnut data={data} />;
};
