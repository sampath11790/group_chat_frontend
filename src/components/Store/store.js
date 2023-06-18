import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "./Auth/Authslice";
import GroupSlice from "./group/groupslice";

const Store = configureStore({
  reducer: {
    auth: AuthenticationSlice.reducer,
    group: GroupSlice.reducer,
  },
});
export default Store;
