'use client'
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

ChartJS.register(ArcElement, Tooltip, Legend);

const QuestionAnalysis = () => {

    const {currentScore} = useSelector((state: RootState) => state.score);

  const data = {
    datasets: [
      {
        data: [Number(currentScore), Number(15-Number(currentScore))], 
        backgroundColor: ['#3b82f6', '#e0f2fe'], // blue and light blue
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 border border-gray-300 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Question Analysis</h2>
      <div className="text-right text-blue-500 mb-2">{currentScore}/15</div>
      <p className="text-sm text-gray-700 mb-4">
        You scored <span className="font-semibold">8 questions correct</span> out of <span className="font-semibold">15</span>. However, it still needs some improvements.
      </p>
      <div className="relative w-48 h-48 mx-auto mb-4">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
            🎯
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
