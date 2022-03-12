import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { FetchContext } from "../components/context/FetchContext";
import { useContext } from "react/cjs/react.development";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Stats = () => {
  const { eventData } = useContext(FetchContext);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "Wildfires",
    "Severe Storms",
    "Volcanoes",
    "Sea and Lake Ice",
  ];

  const noOfWildfires = eventData.filter((item) => {
    return item.categories[0].id === 8;
  }).length;
  const noOfStorms = eventData.filter((item) => {
    return item.categories[0].id === 10;
  }).length;
  const noOfVolcanoes = eventData.filter((item) => {
    return item.categories[0].id === 12;
  }).length;
  const noOfIce = eventData.filter((item) => {
    return item.categories[0].id === 15;
  }).length;

  const data = {
    labels,
    datasets: [
      {
        label: "Number of Events",
        data: [noOfWildfires, noOfStorms, noOfVolcanoes, noOfIce],
        backgroundColor: [
          "rgba(208, 0, 0, .6)",
          "rgba(3, 43, 67, .6)",
          "rgba(82, 51, 1, .6)",
          "rgba(52, 118, 173, .6)",
        ],
        borderColor: [
          "rgba(150, 0, 0)",
          "rgba(1, 43, 67)",
          "rgba(60, 51, 1)",
          "rgba(0, 100, 173)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="stats">
      <div className="chart">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default Stats;
