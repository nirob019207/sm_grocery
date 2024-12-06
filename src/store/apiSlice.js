import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-fresh-harvest.code-commando.com/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      // Retrieve and parse the auth object from localStorage
      const authRaw = localStorage.getItem("auth");
      let auth;

      try {
        auth = JSON.parse(authRaw); // Parse the string to an object
        console.log("Parsed auth:", auth); // Debugging the parsed object
      } catch (e) {
        console.error("Failed to parse auth:", e); // Log any errors
      }

      // Check if token exists and set the Authorization header
      if (auth && auth.token) {
        headers.set("Authorization", `Bearer ${auth.token}`);
        console.log("Authorization header set with token:", auth.token);
      } else {
        console.warn("No valid auth token found.");
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
