import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "./Auth/Authslice";
import GroupSlice from "./group/groupslice";
import MessageSlice from "./message/messageslice";

const Store = configureStore({
  reducer: {
    auth: AuthenticationSlice.reducer,
    group: GroupSlice.reducer,
    message: MessageSlice.reducer,
  },
});
export default Store;
