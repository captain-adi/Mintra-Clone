import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    selectedCategory : []
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setProduct : (state,action)=>{
      state.selectedCategory = action.payload
    }
  }
});

export const { setCategories ,setProduct } = categorySlice.actions; // Export the corrected action
export default categorySlice.reducer;
