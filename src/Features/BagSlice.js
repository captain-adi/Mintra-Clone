import { createSlice } from "@reduxjs/toolkit";


const bagSlice = createSlice({
  name: "bag",
  initialState: {
    bagItems : []
  },
  reducers: {
  addBagitems : (state,actions)=>{
    state.bagItems.push(actions.payload)
    console.log([...state.bagItems]);

  },
  deleteBagItems : (state,actions)=>{
    console.log("deltebagitems")
  }
  },
});

export const { addBagitems, deleteBagItems } = bagSlice.actions;
export default bagSlice.reducer;
