import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  // products: [],
  cart: [],
  idArray: [],
};

const shopSlice = createSlice({
  name: "shope",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    removeProduct(state, action) {
      let newCart = state.cart.filter(
        (product) => product.id == action.payload
      );
      state.cart = newCart;
    },
    cartId(state, action) {
      state.idArray.push(action.payload);
    },
  },
});

export default shopSlice.reducer;
export const { addToCart, clearCart, removeProduct, cartId } =
  shopSlice.actions;
