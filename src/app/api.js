import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const url = "https://fakestoreapi.com";
export const storeApi = createApi({
  reducerPath: "fetchApi",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getFetchProducts: builder.query({
      query: () => "/products",
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetFetchProductsQuery, useGetSingleProductQuery } = storeApi;
