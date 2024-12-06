import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { apiSlice } from "./apiSlice";
import authSlice from "./api/auth/authSlice";
import productSlice from "./api/products/productSlice";
import cartReducer from "./api/cart/cartSlice";



const store = configureStore({
  reducer: {
    ...rootReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
     auth: authSlice,
     products:productSlice,
     cart: cartReducer


  },
  //devTools: false,
  middleware: (getDefaultMiddleware) => {
    const middleware = [...getDefaultMiddleware(), apiSlice.middleware];
    return middleware;
  },
});

export default store;