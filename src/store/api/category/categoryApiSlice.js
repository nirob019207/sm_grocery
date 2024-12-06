import { apiSlice } from "./../.././apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    category: builder.query({
      query: (user) => ({
        url: "/category",
        method: "GET",
        body: user,
      }),
    }),
    
  }),
});

export const {useCategoryQuery } = productsApiSlice;