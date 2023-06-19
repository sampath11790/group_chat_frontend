import { createSlice } from "@reduxjs/toolkit";
const initialstate = {
  groupList: [
    // { id: 1, groupname: "group1" },
    // { id: 2, groupname: "group2" },
    // { id: 3, groupname: "group2" },
  ],
  GroupMember: [
    // { id: 1, email: "sample@gmail.com" },
    // { id: 2, email: "sample@gmail.com" },
    // { id: 3, email: "sample@gmail.com" },
    // { id: 4, email: "sample@gmail.com" },
  ],
  currentGroupid: null,
  currentGroupName: "",
  UserList: [
    // { id: 1, email: "sample@gmail.com" },
    // { id: 2, email: "sample@gmail.com" },
    // { id: 3, email: "sample@gmail.com" },
    // { id: 4, email: "sample@gmail.com" },
  ],
};

const GroupSlice = createSlice({
  name: "group",
  initialState: initialstate,
  reducers: {
    setGroupList(state, action) {
      state.groupList = action.payload;
    },
    setGroupMember(state, action) {
      state.GroupMember = action.payload;
    },
    setUserList(state, action) {
      state.UserList = action.payload;
    },
    setCurrentGroupId(state, action) {
      state.currentGroupid = action.payload;
    },
    setCurrentGroupName(state, action) {
      state.currentGroupName = action.payload;
    },
  },
});

export const groupSliceAction = GroupSlice.actions;
export default GroupSlice;
