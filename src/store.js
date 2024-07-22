import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./reducers/scoreSlice";

export const store = configureStore({
  reducer: {
    score: scoreReducer,
  },
});
