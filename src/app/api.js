import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const url = "https://fakestoreapi.com/products";
export const storeApi = createApi({
  reducerPath: "storeApi",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getFetchProducts: builder.query({
      query: () => `store/`,
    }),
  }),
});

export const { usegetFetchProductsQuery } = storeApi;
