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
    const indexToRemove = state.bagItems.findIndex(
      (product) => product.id === actions.payload.id
    );
    
    if (indexToRemove !== -1) {
      state.bagItems.splice(indexToRemove, 1);
    }
    
  }
  },
});

export const { addBagitems, deleteBagItems } = bagSlice.actions;
export default bagSlice.reducer;
