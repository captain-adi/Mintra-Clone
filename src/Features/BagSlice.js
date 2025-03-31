import { createSlice } from "@reduxjs/toolkit";


const BagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
  addBagitems : (state,actions)=>{
    console.log("addbagitems")
  },
  deleteBagItems : (state,actions)=>{
    console.log("deltebagitems")
  }
  },
});

export const { addBagitems, deleteBagItems } = BagSlice.actions;
export default BagSlice;
