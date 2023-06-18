import { MessageSliceAction } from "./messageslice";

//urls
const MessageUrl = "localhost:3001/user/message";

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

export const SendMesssage = (obj, token) => {
  return async (Dispatch) => {
    try {
      const data = await postactionFun(MessageUrl, obj, token, "POST");
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCurrentGroupMessages = (obj, token) => {
  return async (Dispatch) => {
    try {
      const data = await postactionFun(MessageUrl, obj, token, "POST");
      //   Dispatch(MessageSliceAction.setMessages(data))
    } catch (error) {
      console.log(error);
    }
  };
};
