import { createSlice } from "@reduxjs/toolkit";
import Logout from "../../chatPage/Logout/Logout";
const initialstate = {
  login: null,
  token: null,
  loginsuccess: null,
  email: null,
  logout: null,
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
      if (action.payload.login != null) {
        state.logout = null;
      }
    },
    setlogOut(state, action) {
      state.login = action.payload.login;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.logout = action.payload.logout;
    },
  },
});

export const AuthSliceAction = AuthenticationSlice.actions;
export default AuthenticationSlice;
