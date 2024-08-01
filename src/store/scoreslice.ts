import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScoreState {
  rank: string;
  percentile: string;
  currentScore: string;
  isDialogOpen: boolean;
}

const initialState: ScoreState = {
  rank: '1',
  percentile: '75',
  currentScore: '14',
  isDialogOpen: false,
};

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    setRank(state, action: PayloadAction<string>) {
      state.rank = action.payload;
    },
    setPercentile(state, action: PayloadAction<string>) {
      state.percentile = action.payload;
    },
    setCurrentScore(state, action: PayloadAction<string>) {
      state.currentScore = action.payload;
    },
    openDialog(state) {
      state.isDialogOpen = true;
    },
    closeDialog(state) {
      state.isDialogOpen = false;
    },
  },
});

export const { setRank, setPercentile, setCurrentScore, openDialog, closeDialog } = scoreSlice.actions;

export default scoreSlice.reducer;
