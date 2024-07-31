import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import scoreReducer from './scoreslice';

export const store = configureStore({
  reducer: {
    score: scoreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
