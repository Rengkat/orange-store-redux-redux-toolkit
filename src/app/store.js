import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../app/feature/storeSlice";
import { storeApi } from "./api";
export const store = configureStore({
  reducer: { [storeApi.reducerPath]: storeApi.reducer, shop: shopReducer },
});
