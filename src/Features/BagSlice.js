import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const BagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addBagitems: (state, action) => {
      state.push(action.payload);
    },
    deleteBagItems: (state, action) => {
      state.splice(action.payload, 1);

      // return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addBagitems, deleteBagItems } = BagSlice.actions;
export default BagSlice;
