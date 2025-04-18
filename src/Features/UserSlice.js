import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    address: [{
        nameOfUser : "Aditya Pandey",
        place : "Home",
        address : "sipat chowk , sarda mandir ,  near pinky provisionBilaspur Bilaspur Chhattisgarh",
        pincode : 49001,
        mobileNumber : "1234567891",
    }],
  },
  reducers: {
    addAddress: (state, action) => {
        state.address.push(action.payload) ;
    },
  },
});

export const {addAddress} = UserSlice.actions ;
export default UserSlice.reducer ;