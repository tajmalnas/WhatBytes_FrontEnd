'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store'; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin
);

const chartData = [
  { percentile: 0, count: 1 },
  { percentile: 10, count: 3 },
  { percentile: 20, count: 5 },
  { percentile: 30, count: 6 },
  { percentile: 40, count: 8 },
  { percentile: 50, count: 14 },
  { percentile: 60, count: 7 },
  { percentile: 70, count: 4 },
  { percentile: 80, count: 2 },
  { percentile: 90, count: 4 },
  { percentile: 100, count: 2 },
];

const ComparisonGraph: React.FC = () => {
  const { percentile } = useSelector((state: RootState) => state.score);

  // Transform the data for Chart.js
  const labels = chartData.map(data => data.percentile);
  const dataPoints = chartData.map(data => data.count);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Total Count',
        data: dataPoints,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  // Explicitly define the type for options
  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Total count: ${context.raw}`;
          },
        },
      },
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            xMin: Number(percentile) / 10,
            xMax: Number(percentile) / 10,
            borderColor: '#D3D3D3',
            borderWidth: 2,
          },
          label1: {
            type: 'label',
            xValue: Number(percentile) / 10,
            yValue: Number(percentile) / 10,
            content: ['Your Percentile'],
            font: {
              size: 14,
            },
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Percentile',
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Count',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="border border-gray-300 rounded-md p-4">
      <h2 className="text-xl font-bold mb-4">Comparison Graph</h2>
      <p className="mb-4 text-lg">
        <span className="text-lg font-bold inline">You scored {percentile}% percentile</span> which is higher than the average 72% of all the engineers who took this assessment.
      </p>
      <Line data={data} options={options} />
    </div>
  );
};

export default ComparisonGraph;
