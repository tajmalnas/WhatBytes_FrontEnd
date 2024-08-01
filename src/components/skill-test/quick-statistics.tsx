import { RootState } from '@/store/store';
import React from 'react'
import { useSelector } from 'react-redux';

const QuickStatistics = () => {
    const { rank, percentile, currentScore } = useSelector((state: RootState) => state.score);
  return (
    <div className='border border-gray-300 rounded-md p-4 py-8 flex flex-col gap-2'>
        <h1 className='text-xl text-left pl-2 font-extrabold'>Quick Statistics</h1>
        <div className='flex flex-row gap-2 flex-wrap justify-center'>
        <div className='flex flex-row items-center px-2 py-4 gap-2 mt-4 pr-2 md:border-r-2 md:border-gray-300'>
            <div className='text-md'>
                <div className='w-10 h-10 lg:w-16 md:h-16 text-md md:text-2xl rounded-full bg-slate-100 flex items-center justify-center'>🏆</div>
            </div>
            <div className='flex-col text-lg'>
                <div className='lg:text-lg text-md font-bold'>{rank}</div>
                <div className='text-gray-600 lg:text-md text-sm'>Your Rank</div>
            </div>
        </div>

        <div className='flex flex-row items-center px-2 py-4 gap-2 mt-4 pr-2 md:border-r-2 md:border-gray-300'>
            <div className='text-md'>
                <div className='w-10 h-10 lg:w-16 md:h-16 text-md md:text-2xl rounded-full bg-slate-100 flex items-center justify-center'>📆</div>
            </div>
            <div className='flex-col text-lg'>
                <div className='lg:text-lg text-md font-bold'>{percentile}%</div>
                <div className='text-gray-600 lg:text-md text-sm'>percentile</div>
            </div>
        </div>

        <div className='flex flex-row items-center px-2 py-4 gap-4 mt-4'>
            <div className='text-md'>
                <div className='w-10 h-10 lg:w-16 md:h-16 text-md md:text-2xl rounded-full bg-slate-100 flex items-center justify-center'>✔</div>
            </div>
            <div className='flex-col text-lg'>
                <div className='lg:text-lg text-md font-bold'>{currentScore}/15</div>
                <div className='text-gray-600 lg:text-md text-sm'>Correct Answer</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default QuickStatistics