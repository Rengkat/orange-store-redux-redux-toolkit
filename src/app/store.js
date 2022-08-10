import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../app/feature/storeSlice";
export const store = configureStore({
  reducer: { shop: shopReducer },
});
