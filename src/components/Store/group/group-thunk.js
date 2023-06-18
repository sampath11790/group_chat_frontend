import GroupSlice, { groupSliceAction } from "./groupslice";
//urls
const getGroupsUrl = "localhost:3001/group/user";
const createGroupUrl = "localhost:3001/group/create";
const addmemberUrl = "localhost:3001/group/user";
const removeMemberUrl = "localhost:3001/group/user";
const GetAllMembersUrl = "localhost:3001/user/userlist";
//support function
const actionFun = async (url, obj, token, method) => {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  const data = await response.json();

  if (data.error) {
    throw new Error(data);
  }
  return data;
};

const getactionFun = async (url, token) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const data = await response.json();
  if (data.error) {
    throw new Error(data);
  }
  return data;
};

export const createGroup = (obj, token) => {
  return async (Dispatch) => {
    try {
      const data = await actionFun(createGroupUrl, obj, token, "POST");
    } catch (error) {
      console.log(error);
    }
  };
};

export const AddMember = (obj, token) => {
  return async (Dispatch) => {
    try {
      const data = await actionFun(addmemberUrl, obj, token, "POST");
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeMember = (obj, token) => {
  return async (Dispatch) => {
    try {
      const data = await actionFun(removeMemberUrl, obj, token, "DELETE");
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetgroupList = (token) => {
  return async (Dispatch) => {
    try {
      const data = await getactionFun(getGroupsUrl, token);
      //  Dispatch(groupSliceAction.setGroupList(data))
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetAllMembers = (token) => {
  return async (Dispatch) => {
    try {
      const data = await getactionFun(GetAllMembersUrl, token);
      // Dispatch(groupSliceAction.setGroupMember(data))
    } catch (error) {
      console.log(error);
    }
  };
};
