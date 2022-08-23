import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  // products: [],
  cart: [],
};

const shopSlice = createSlice({
  name: "shope",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
  },
});

export default shopSlice.reducer;
export const { addToCart } = shopSlice.actions;
