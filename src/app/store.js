import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../app/feature/storeSlice";
import { storeApi } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
  reducer: { cart: shopReducer, [storeApi.reducerPath]: storeApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
});
