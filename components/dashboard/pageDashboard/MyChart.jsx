"use client"
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const MyChart = () => {
  const [selectedMonth, setSelectedMonth] = useState("Jan");
  const [selectedYear, setSelectedYear] = useState(2022);

  const handleMonthSwitch = (newMonth, newYear) => {
    setSelectedMonth(newMonth);
    setSelectedYear(newYear);
  };

  const yearsData = [
    {
      year: 2021,
      data: [3, 20, 30, 40, 10, 20, 40, 10, 5, 10, 70, 30],
    },
    {
      year: 2022,
      data: [1, 20, 30, 40, 10, 20, 40, 10, 5, 10, 70, 30],
    },
    {
      year: 2023,
      data: [10, 25, 35, 45, 15, 25, 45, 15, 10, 15, 75, 35],
    },
    {
      year: 2024,
      data: [30, 35, 10, 45, 15, 6, 45, 19, 10, 15, 55, 35],
    },
  ];

  const selectedYearData = yearsData.find((data) => data.year === selectedYear);

  if (!selectedYearData) {
    // Handle the case where selected year data is not available
    return <div>Error: Data not available for the selected year.</div>;
  }

  const getBackgroundColor = (month) => {
    return selectedMonth === month
      ? "rgba(55, 65, 81, 0.5)"
      : "rgba(255, 99, 132, 0.01)";
  };

  const data = {
    labels: months.map((month) => `${month}-${selectedYear}`),
    datasets: [
      {
        type: "bar",
        label: "",
        data: selectedYearData.data,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: months.map((month) => getBackgroundColor(month)),
      },
      {
        type: "line",
        label: "Average Grade",
        data: selectedYearData.data,
        fill: false,
        borderColor: "rgb(54, 162, 235)",
        tension: 0.4,
      },
      {
        type: "line",
        label: "Exam",
        data: [...selectedYearData.data].reverse(),
        fill: false,
        borderColor: "rgb(255, 205, 86)",
        tension: 0.4,
      },
    ],
  };

  const config = {
    type: "scatter",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          display: false,
        },
        x: {
          display: true,
        },
      },
    },
  };

  function MonthSwitcher({ currentMonth, currentYear, onSwitch }) {
    const handleSwitch = (direction) => {
      const currentIndex = months.indexOf(currentMonth);
      let newYear = currentYear;

      if (direction === "right" && currentIndex === 11) {
        // If moving right and current month is December, increase year
        newYear += 1;
      } else if (direction === "left" && currentIndex === 0) {
        // If moving left and current month is January, decrease year
        newYear -= 1;
      }

      const newIndex =
        direction === "right"
          ? (currentIndex + 1) % months.length
          : (currentIndex - 1 + months.length) % months.length;

      onSwitch(months[newIndex], newYear);
    };

    return (
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleSwitch("left")}
          className="bg-gray-300 px-2 py-1 rounded focus:outline-none"
        >
          {"<"}
        </button>
        <button
          className="px-2 py-1 focus:outline-none"
          onClick={() => handleSwitch("right")}
        >
          {`${currentMonth} ${currentYear}`}
        </button>
        <button
          onClick={() => handleSwitch("right")}
          className="bg-gray-300 px-2 py-1 rounded focus:outline-none"
        >
          {">"}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full items-center p-4">
      <div className="w-full flex justify-around">
        <p>Statistic</p>
        <div>
          <MonthSwitcher
            currentMonth={selectedMonth}
            currentYear={selectedYear}
            onSwitch={handleMonthSwitch}
          />
        </div>
      </div>

      <div className="mt-8 w-full ">
        <Bar {...config} />
      </div>
    </div>
  );
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default MyChart;
