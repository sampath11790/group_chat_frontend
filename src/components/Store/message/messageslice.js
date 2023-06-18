import { createSlice } from "@reduxjs/toolkit";
const initialstate = {
  messages: [
    { id: 1, message: "hi" },
    { id: 2, message: "hi" },
    { id: 3, message: "hi" },
    { id: 4, message: "hi" },
  ],
};

const MessageSlice = createSlice({
  name: "message",
  initialState: initialstate,
  reducers: {
    setMessages(state, action) {
      state.messages = action.payload;
    },
  },
});

export const MessageSliceAction = MessageSlice.actions;
export default MessageSlice;
