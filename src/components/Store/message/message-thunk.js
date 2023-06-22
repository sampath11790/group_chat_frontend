import { MessageSliceAction } from "./messageslice";
// import io from "socket.io-client";
// const socket = io("http://localhost:8001");
import socket from "../../../socket";

//urls
const MessageUrl = "http://localhost:3001/user/message";
const getmessageurl = "http://localhost:3001/user/messagelist";
const sendingFileUrl = "http://localhost:3001/user/file";
//support function
const postactionFun = async (url, obj, token, method) => {
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

const postFile = async (url, obj, token, method, parameter) => {
  const formData = new FormData();
  formData.append("file", obj);
  const response = await fetch(`${url}/${parameter}`, {
    method: method,
    body: formData,
    headers: {
      Authorization: token,
    },
  });

  const data = await response.json();

  if (data.error) {
    throw new Error(data);
  }
  return data;
};

export const SendMesssage = (obj, token) => {
  return async (Dispatch) => {
    try {
      const data = await postactionFun(MessageUrl, obj, token, "POST");
      socket.emit("send-message", obj.groupid);
      // socket.emit("send-message", { groupid: obj.groupid });
      // Dispatch(MessageSliceAction.setMessages(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCurrentGroupMessages = (obj, token) => {
  return async (Dispatch) => {
    try {
      const data = await postactionFun(getmessageurl, obj, token, "POST");

      // console.log(data.data);
      Dispatch(MessageSliceAction.setMessages(data.data));
      //   Dispatch(MessageSliceAction.setMessages(data))
    } catch (error) {
      console.log(error);
    }
  };
};

//file

export const SendFile = (obj, token) => {
  return async (Dispatch) => {
    try {
      console.log(obj);
      const data = await postFile(
        sendingFileUrl,
        obj.file,
        token,
        "POST",
        obj.groupid
      );
      socket.emit("send-message", obj.groupid);
      // socket.emit("send-message", obj.groupid);
      // socket.emit("send-message", { groupid: obj.groupid });
      // Dispatch(MessageSliceAction.setMessages(data));
    } catch (error) {
      console.log(error);
    }
  };
};
