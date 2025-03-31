import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    allItems: [],
    loading: false,
  },
  reducers: {
    fetchData: (state, action) => {
      state.loading = true ;
      state.allItems = action.payload;
      state.loading = false 

    },
  },
});

export const { fetchData } = dataSlice.actions;
export default dataSlice.reducer;
