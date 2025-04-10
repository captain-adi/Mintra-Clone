import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../Features/dataSlice";
import categorySlice from "../Features/cetogerySlice";

import bagSlice from "../Features/BagSlice";
export const store = configureStore({
  reducer: {
    data: dataSlice,
    category: categorySlice,
    bag: bagSlice,
  },
});
