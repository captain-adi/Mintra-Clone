import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "../Features/ItemSlice";
import BagSlice from '../Features/BagSlice'
export const store =  configureStore({
 reducer:{
    item:itemSlice.reducer,
    bag: BagSlice.reducer
 }

})
