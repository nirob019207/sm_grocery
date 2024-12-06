import { apiSlice } from "./../.././apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    Users: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
    
  }),
});

export const {useUsersQuery } = productsApiSlice;