import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  idArray: [],
  isOpen: false,
};

const shopSlice = createSlice({
  name: "shope",
  initialState,
  reducers: {
    addToCart(state, action) {
      const tempIndex = state.cart.findIndex(
        (pro) => pro.id === action.payload.id
      );
      if (tempIndex >= 0) {
        state.cart[tempIndex].quantity += 1;
      } else {
        const tepmProd = { ...action.payload, quantity: 1 };
        state.cart.push(tepmProd);
      }
    },
    clearCart(state) {
      state.cart = [];
    },
    removeProduct(state, action) {
      let newCart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      state.cart = newCart;
    },
    cartId(state, action) {
      state.idArray.push(action.payload);
    },
    addQuantity(state, action) {
      let newPro = state.cart.findIndex((pro) => pro.id === action.payload);
      if (newPro) {
        state.cart[newPro].quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      let newPro = state.cart.findIndex((pro) => pro.id === action.payload);
      if (state.cart[newPro].quantity > 1) {
        state.cart[newPro].quantity -= 1;
      } else if (state.cart[newPro].quantity === 1) {
        const temPro = state.cart.filter((pro) => pro.id !== action.payload);
        state.cart = temPro;
      }
    },
    openCart(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export default shopSlice.reducer;
export const {
  addToCart,
  clearCart,
  removeProduct,
  cartId,
  addQuantity,
  decreaseQuantity,
  openCart,
} = shopSlice.actions;
