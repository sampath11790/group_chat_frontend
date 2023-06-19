import { createSlice } from "@reduxjs/toolkit";
const initialstate = {
  login: null,
  token: null,
  loginsuccess: null,
  email: null,
};

const AuthenticationSlice = createSlice({
  name: "auth",
  initialState: initialstate,
  reducers: {
    login(state, action) {
      state.loginsuccess = true;
    },
    setAuth(state, action) {
      state.login = action.payload.login;
      state.token = action.payload.token;
      state.email = action.payload.email;
    },
  },
});

export const AuthSliceAction = AuthenticationSlice.actions;
export default AuthenticationSlice;
