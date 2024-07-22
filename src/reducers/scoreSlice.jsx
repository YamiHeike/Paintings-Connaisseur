import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    increment: (state) => {
      state.score++;
    },
    decrement: (state) => {
      state.score--;
    },
    reset: (state) => {
      state.score = 0;
    },
  },
});

export const { increment, decrement, reset } = scoreSlice.actions;
export default scoreSlice.reducer;
