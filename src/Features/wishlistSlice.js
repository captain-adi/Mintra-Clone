import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: [],
  },
  reducers: {
    setWishlistItems: (state, action) => {
      state.wishlistItems.push(action.payload);
    },
    removeWishlistItems : (state,action)=>{
     state.wishlistItems =  state.wishlistItems.filter((product)=>product.id !== action.payload.id)
    }
  },
});

export const { setWishlistItems ,removeWishlistItems} = wishlistSlice.actions;
export default wishlistSlice.reducer;
