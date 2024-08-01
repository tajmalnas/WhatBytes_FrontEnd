'use client';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openDialog } from '../../store/scoreslice';
import UpdateScoresDialog from '../ui/update-score-dialog';

const SkillTestInformation = () => {
  const dispatch = useDispatch();

  const handleOpenDialog = () => {
    dispatch(openDialog());
  };

  return (
    <div className='border border-gray-300 rounded-md p-4 py-8 flex flex-col gap-2 lg:flex-row items-center'>
      <div>
        <h1 className='text-sm pl-2 font-extrabold'>HTML</h1>
        <div className='relative w-14 h-14'>
          <Image src='/images/html-5.png' alt='Skill Test' fill className='object-cover'/>
        </div>
      </div>
      <div className='flex flex-col pl-4'>
        <div className='text-lg font-semibold'>
          Hyper Text Markup Language
        </div>
        <div className='font-semibold text-gray-600 text-sm'>
          Questions: 10 | Duration: 10 min | Submitted on 5 June 2021
        </div>
      </div>
      <div className='pl-4'>
        <button 
          className='bg-blue-900 text-white font-bold rounded-lg py-2 px-4 border-4 border-blue-950 hover:scale-90'
          onClick={handleOpenDialog}
        >
          Update
        </button>
      </div>
      <UpdateScoresDialog />
    </div>
  );
};

export default SkillTestInformation;
