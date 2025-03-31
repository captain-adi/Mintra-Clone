import { configureStore } from "@reduxjs/toolkit";
import BagSlice from "../Features/BagSlice";
import dataSlice from "../Features/dataSlice";
export const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});
