import { apiSlice } from "../../apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all products
    products: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
 
    }),

    // Fetch a single product by ID
    singleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      
    
    }),
    addProducts: builder.mutation({
      query: (productData) => ({
        url: `/products`,
        method: "POST",
        body: productData,

      }),
    })
    
  }),
});

export const { useProductsQuery, useSingleProductQuery,useAddProductsMutation } = productsApiSlice;
