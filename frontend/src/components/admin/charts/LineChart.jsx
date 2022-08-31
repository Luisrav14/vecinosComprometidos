import { Line } from "react-chartjs-2";
import ChartJS from "chart.js/auto";

export const LineChart = () => {
  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
    datasets: [
      {
        label: "Ingresos Mensuales",
        data: [600, 300, 400, 800, 600, 700, 750],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line data={data} />;
};
