import { createSlice } from "@reduxjs/toolkit";
import { items } from "../data/items";
const itemSlice = createSlice({
  name: "item",
  initialState:{
    items : []
  },
  reducers: {
    selectedItem 
  },
});


export default itemSlice;
