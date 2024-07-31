'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, useAppDispatch } from '@/store/store';
import { setRank, setPercentile, setCurrentScore, closeDialog } from '@/store/scoreslice';

const UpdateScoresDialog = () => {
  const dispatch = useAppDispatch();
  const { rank, percentile, currentScore, isDialogOpen } = useSelector((state: RootState) => state.score);

  const [rankValue, setRankValue] = React.useState(rank);
  const [percentileValue, setPercentileValue] = React.useState(percentile);
  const [currentScoreValue, setCurrentScoreValue] = React.useState(currentScore);

  const [isRankValid, setIsRankValid] = React.useState(true);
  const [isPercentileValid, setIsPercentileValid] = React.useState(true);
  const [isCurrentScoreValid, setIsCurrentScoreValid] = React.useState(true);

  const validateRank = (value: string) => {
    const num = parseInt(value, 10);
    return num >= 1 && num <= 100;
  };

  const validatePercentile = (value: string) => {
    const num = parseInt(value, 10);
    return num >= 1 && num <= 100;
  };

  const validateCurrentScore = (value: string) => {
    const num = parseInt(value, 10);
    return num >= 0 && num <= 15;
  };

  const handleRankChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRankValue(value);
    setIsRankValid(validateRank(value));
  };

  const handlePercentileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPercentileValue(value);
    setIsPercentileValid(validatePercentile(value));
  };

  const handleCurrentScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCurrentScoreValue(value);
    setIsCurrentScoreValid(validateCurrentScore(value));
  };

  const saveData = () => {
    if (!isRankValid || !isPercentileValid || !isCurrentScoreValid) return;

    dispatch(setRank(rankValue));
    dispatch(setPercentile(percentileValue));
    dispatch(setCurrentScore(currentScoreValue));
    dispatch(closeDialog());
  };

  if (!isDialogOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Update Scores</h2>
          <img src="images/html-5.png" alt="HTML5 Logo" className="w-8 h-8" />
        </div>
        <form>
          <div className="mb-8 flex flex-col lg:flex-row">
            <label className="flex items-center mb-2 w-10/12">
              <span className="mr-2 flex items-center justify-center flex-row bg-blue-900 text-white rounded-full w-8 h-8">1</span>
              <p>Update your <span className='font-bold ml-0 lg:ml-1'>Rank</span></p>
            </label>
            <div>
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={rankValue}
                onChange={handleRankChange}
              />
              {!isRankValid && <p className="text-sm text-red-700 mt-2">Rank must be between 1 to 100</p>}
            </div>
          </div>
          <div className="mb-8 flex flex-col lg:flex-row">
            <label className="flex items-center mb-2 w-10/12">
              <span className="mr-2 flex items-center justify-center bg-blue-900 text-white rounded-full w-8 h-8">2</span>
              <p>Update your <span className='font-bold ml-0 lg:ml-1'>Percentile</span></p>
            </label>
            <div>
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={percentileValue}
                onChange={handlePercentileChange}
              />
              {!isPercentileValid && <p className="text-sm text-red-700 mt-2">Percentile must be between 1 to 100</p>}
            </div>
          </div>
          <div className="mb-6 flex flex-col lg:flex-row">
            <label className="flex items-center mb-2 w-10/12">
              <span className="mr-2 flex items-center justify-center bg-blue-900 text-white rounded-full w-8 h-8">3</span>
              <p>Update your <span className='font-bold ml-0 lg:ml-1'>Current Score (out of 15)</span></p>
            </label>
            <div>
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={currentScoreValue}
                onChange={handleCurrentScoreChange}
              />
              {!isCurrentScoreValid && <p className="text-sm text-red-700 mt-2">Score must be between 0 to 15</p>}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 mr-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={() => dispatch(closeDialog())}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-600"
              onClick={saveData}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateScoresDialog;
