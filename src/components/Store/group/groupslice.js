import { createSlice } from "@reduxjs/toolkit";
const initialstate = {
  groupList: [{ name: "group1" }, { name: "group2" }],
};

const GroupSlice = createSlice({
  name: "group",
  initialState: initialstate,
  reducers: {
    setGroupList(state, action) {
      //   state.groupList = action.payload;
    },
  },
});

export const groupSliceAction = GroupSlice.actions;
export default GroupSlice;
