import { createSlice } from "@reduxjs/toolkit";
const initialstate = {
  groupList: [],
  GroupMember: [],
  currentGroupid: null,
  currentGroupName: "",
  UserList: [],
  isAdmin: false,
  call: 0,
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
      console.log(action.payload);
    },
    setCurrentGroupName(state, action) {
      state.currentGroupName = action.payload;
    },
    setGroupInitalstate(state, action) {
      state.currentGroupName = "";
      state.currentGroupid = null;
    },
    setIsAdmin(state, action) {
      state.isAdmin = action.payload;
    },
    setCall(state, action) {
      state.call++;
    },
  },
});

export const groupSliceAction = GroupSlice.actions;
export default GroupSlice;
