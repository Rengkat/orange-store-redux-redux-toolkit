import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  cart: [],
};

const shopSlice = createSlice({
  name: "shope",
  initialState,
  reducers: {},
});

export default shopSlice.reducer;
