import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: {
    bagItems: [],
    donation: 0,
    priceDetails: [
      {
        totalMRP: 0,
        totalDiscount: 0,
        shippingFee: 0,
        platFormFee: 0,
        finalMRP : 0 ,
      },
    ],
  },
  reducers: {
    addBagitems: (state, actions) => {
      state.bagItems.push(actions.payload);
      console.log([...state.bagItems]);
    },
    deleteBagItems: (state, actions) => {
      const indexToRemove = state.bagItems.findIndex(
        (product) => product.id === actions.payload.id
      );

      if (indexToRemove !== -1) {
        state.bagItems.splice(indexToRemove, 1);
      }
    },
    addDonation: (state, actions) => {
      state.donation = actions.payload;
    },
    addPriceDetail: (state, action) => {
      state.priceDetails = action.payload ;
    },
  },
});

export const { addBagitems, deleteBagItems, addDonation ,addPriceDetail} = bagSlice.actions;
export default bagSlice.reducer;
