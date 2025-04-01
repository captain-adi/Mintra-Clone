import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../Features/dataSlice";
import categorySlice from "../Features/cetogerySlice"
export const store = configureStore({
  reducer: {
    data: dataSlice,
    category : categorySlice
  },
});
