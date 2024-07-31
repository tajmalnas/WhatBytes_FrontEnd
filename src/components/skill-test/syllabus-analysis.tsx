'use client'
import React from 'react';

const SyllabusAnalysis = () => {
  const data = [
    { label: 'HTML Tools, Forms, History', value: 80, color: 'bg-blue-500',text:'text-blue-500' },
    { label: 'Tags & References in HTML', value: 60, color: 'bg-orange-500',text:'text-orange-500' },
    { label: 'Tables & References in HTML', value: 24, color: 'bg-red-500',text:'text-red-500' },
    { label: 'Tables & CSS Basics', value: 96, color: 'bg-green-500',text:'text-green-500' },
  ];

  return (
    <div className="w-full max-w-md mx-auto p-8 border border-gray-300 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Syllabus Wise Analysis</h2>
      <div className='flex flex-col gap-10 mt-8'>
        {data.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between text-lg mb-4">
              <span>{item.label}</span>
              <span className={'font-bold '+item.text}>{item.value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className={`${item.color} h-4 rounded-full`}
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusAnalysis;
