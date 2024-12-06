import { createSlice } from "@reduxjs/toolkit";

const storeUser = JSON.parse(localStorage.getItem("auth"));

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: storeUser?.token ? storeUser.token : null,
    role:undefined,
    isLoggedIn: storeUser?.token ? true : false,
  },
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.role=action.payload.role;
    },
    logOut: (state, action) => {
      state.token = null;
      state.role=null;
      state.isLoggedIn = false;
    
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;
