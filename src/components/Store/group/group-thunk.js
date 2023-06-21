import socket from "../../../socket";
import GroupSlice, { groupSliceAction } from "./groupslice";

// import io from "socket.io-client";
// const socket = io("http://localhost:8001");

//urls
const getGroupsUrl = "http://localhost:3001/group";
const createGroupUrl = "http://localhost:3001/group/create";
const addmemberUrl = "http://localhost:3001/group/user";
const removeMemberUrl = "http://localhost:3001/group/user";
const GetAllMembersUrl = "http://localhost:3001/user/userlist";
const GetGroupMembersUrl = "http://localhost:3001/group/groupuser";
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
      Dispatch(groupSliceAction.setCall());
    } catch (error) {
      console.log(error);
    }
  };
};

export const AddMember = (obj, token) => {
  return async (Dispatch) => {
    try {
      const data = await actionFun(addmemberUrl, obj, token, "POST");

      //to notify that user
      // socket.emit("added-group", obj);
      const adminemail = localStorage.getItem("email");
      // console.log({ ...obj, adminemail: adminemail });
      socket.emit("added-group", { ...obj, adminemail: adminemail });
      // alert("user successfully added in this group");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeMember = (obj, token) => {
  return async (Dispatch) => {
    try {
      const data = await actionFun(removeMemberUrl, obj, token, "DELETE");
      // console.log("data");

      const adminemail = localStorage.getItem("email");
      // console.log({ ...obj, adminemail: adminemail });
      socket.emit("removed-group", { ...obj, adminemail: adminemail });
      // alert("user successfully  removed from this group");
      // socket.emit("removed-group", obj);
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetgroupList = (token) => {
  return async (Dispatch) => {
    try {
      const data = await getactionFun(getGroupsUrl, token);

      Dispatch(groupSliceAction.setGroupList(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetAllMembers = (token, id) => {
  return async (Dispatch) => {
    try {
      const data = await getactionFun(GetAllMembersUrl, token);
      console.log("all group messmber", data);
      Dispatch(groupSliceAction.setUserList(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetGroupMembers = (token, id) => {
  return async (Dispatch) => {
    try {
      console.log(" group messmber funcction call");
      const data = await actionFun(
        GetGroupMembersUrl,
        { groupid: id },
        token,
        "POST"
      );
      console.log(" group messmber", data);
      Dispatch(groupSliceAction.setGroupMember(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const DeleteGroup = (token, id) => {
  return async (Dispatch) => {
    try {
      console.log(" DeleteGroup funcction call");
      const data = await actionFun(
        getGroupsUrl,
        { groupid: id },
        token,
        "DELETE"
      );
      console.log(" group deleted");
      socket.emit("delete-group", { groupid: id });
      // Dispatch(groupSliceAction.setGroupMember(data.data));
    } catch (error) {
      console.log(error);
    }
  };
};
