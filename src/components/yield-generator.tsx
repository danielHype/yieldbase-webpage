"use client";
// src/YieldGenerator.js
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { format, subDays, startOfDay, addDays } from "date-fns";
import useLanguage from "@/hooks/useLanguage";
import { useTranslation } from "@/app/i18n/client";

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

// Utility function to format numbers as IDR
const formatIDR = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // IDR typically doesn't use decimal places
    maximumFractionDigits: 0,
  }).format(number);
};

const YieldGenerator = () => {
  const language = useLanguage();
  const { t } = useTranslation(language, "common");
  const initialYield = 1000000; // Starting with IDR 1,000,000
  const [yieldAmount, setYieldAmount] = useState(initialYield);
  const [chartData, setChartData] = useState({
    datasets: [
      {
        label: "Yield Over Time",
        data: [],
        fill: false,
        borderColor: "#39FF14", // Neon Green
        backgroundColor: "#39FF14",
        tension: 0.4,
        pointRadius: 0, // Hide data points for a cleaner look
      },
    ],
  });

  // Function to generate initial 7 days of data
  const generateInitialData = () => {
    const initialData = [];
    const today = startOfDay(new Date());
    for (let i = 6; i >= 0; i--) {
      const date = subDays(today, i);
      initialData.push({
        x: date,
        y: initialYield + Math.floor(Math.random() * 500000), // Positive variation only
      });
    }
    return initialData;
  };

  // Initialize chart with 7 days of data on mount
  useEffect(() => {
    const initialData = generateInitialData();
    setChartData((prevData) => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0],
          data: initialData,
        },
      ],
    }));
  }, []); // Run once on mount

  // Function to ensure the chart always displays the last 7 days
  const ensureSevenDays = (dataPoints) => {
    const today = startOfDay(new Date());
    const sevenDaysAgo = subDays(today, 6);
    const fullData = [];

    for (let i = 0; i < 7; i++) {
      const currentDay = addDays(sevenDaysAgo, i);
      const existingData = dataPoints.find(
        (point) =>
          format(point.x, "yyyy-MM-dd") === format(currentDay, "yyyy-MM-dd")
      );
      if (existingData) {
        fullData.push(existingData);
      } else {
        // If no data for the day, use the previous day's yield or default
        const previousData = fullData[i - 1] || { y: initialYield };
        fullData.push({
          x: currentDay,
          y: previousData.y, // Carry forward the last known yield
        });
      }
    }

    return fullData;
  };

  // Update chart data periodically
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate yield growth by adding IDR 50,000 to 100,000 every interval
      const increment = Math.floor(Math.random() * 50000) + 50000;
      setYieldAmount((prev) => prev + increment);

      setChartData((prevData) => {
        const newData = [...prevData.datasets[0].data];
        const now = new Date();

        // Add a new data point for the current day
        const todayStart = startOfDay(now);
        const lastDataPoint = newData[newData.length - 1];
        if (
          !lastDataPoint ||
          format(lastDataPoint.x, "yyyy-MM-dd") !==
            format(todayStart, "yyyy-MM-dd")
        ) {
          newData.push({
            x: todayStart,
            y: yieldAmount + increment, // New yield value
          });
        } else {
          // Update the existing data point for today
          newData[newData.length - 1] = {
            x: todayStart,
            y: yieldAmount + increment,
          };
        }

        // Ensure we have at least 7 days of data
        const ensuredData = ensureSevenDays(newData);

        // Keep only the last 7 days
        const sevenDaysAgo = subDays(startOfDay(now), 6);
        const filteredData = ensuredData.filter(
          (dataPoint) => dataPoint.x >= sevenDaysAgo
        );

        return {
          ...prevData,
          datasets: [
            {
              ...prevData.datasets[0],
              data: filteredData,
            },
          ],
        };
      });
    }, 5000); // Update every 5 seconds to simulate real-time over days

    return () => clearInterval(interval);
  }, [yieldAmount]); // Depend on yieldAmount to ensure correct updates

  // Calculate dynamic y-axis range
  const calculateYAxis = () => {
    const currentYield = yieldAmount;
    const padding = 500000; // Adjust padding as needed (e.g., IDR 500,000)
    const minY = Math.max(0, currentYield - padding);
    const maxY = currentYield + padding;
    return { minY, maxY };
  };

  const { minY, maxY } = calculateYAxis();

  const data = {
    datasets: chartData.datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: "easeOut",
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
          tooltipFormat: "PPpp",
          displayFormats: {
            day: "MMM d",
            hour: "MMM d, h a",
          },
        },
        grid: {
          display: false,
        },

        ticks: {
          color: "#9ca3af",
          maxRotation: 0,
          minRotation: 0,
          display: false,
        },
        min: subDays(startOfDay(new Date()), 6), // Ensure at least 7 days are shown
        max: startOfDay(new Date()), // Up to today
      },
      y: {
        min: minY,
        max: maxY,
        grid: {
          display: false,
        },
        ticks: {
          color: "#9ca3af",
          callback: function (value) {
            return formatIDR(value);
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return formatIDR(context.parsed.y);
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen   p-4">
      {/* Header */}
      <h2 className="text-4xl mb-8">{t("generateYield")}</h2>

      {/* Trading Chart */}
      <div className="w-full max-w-4xl bg-gray-800 p-4 rounded-lg shadow-lg h-80">
        <Line data={data} options={options} />
      </div>

      {/* Yield Amount Display */}
      <div className="text-6xl font-bold tracking-widest mt-8 animate-pulse">
        {formatIDR(yieldAmount)}
      </div>

      {/* Futuristic Glow Effect */}
      <div className="relative mt-10">
        <div className="absolute inset-0 blur-2xl opacity-50 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-ping"></div>
        <div className="text-2xl font-light ">{t("totalYieldGenerated")}</div>
      </div>
    </div>
  );
};

export default YieldGenerator;
