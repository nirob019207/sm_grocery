import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: undefined,
    
};

const productSlice = createSlice({
    name: "proudcts",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
            
        },
      
    },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;