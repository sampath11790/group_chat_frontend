import React, { useState } from "react";
import cls from "./chat.module.css";
import ChatNav from "./chatNav";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Message from "./Message/message";
import { useDispatch, useSelector } from "react-redux";
import { SendMesssage } from "../Store/message/message-thunk";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Chat = () => {
  const [message, setmessage] = useState("");
  const { currentGroupid } = useSelector((state) => state.group);
  const { token } = useSelector((state) => state.auth);
  const { messages } = useSelector((state) => state.message);

  const Dispatch = useDispatch();
  const fromHandler = (e) => {
    e.preventDefault();
    Dispatch(
      SendMesssage({ message: message, groupid: currentGroupid }, token)
    );
  };

  return (
    <div className={cls.Chat_page_cont}>
      <ChatNav></ChatNav>
      <div className={cls.Chat_msg}>
        {messages.map((item, index) => (
          <Message key={item.id} id={item.id} message={item.message}></Message>
        ))}
      </div>
      <form className={cls.Chat_buttom_box} onSubmit={fromHandler}>
        <input type="text" name="text" onChange={(e) => e.target.value}></input>
        <div className={cls.Chat_botton_elm}>
          <label htmlFor="fileInput">
            <span>📎</span>
          </label>
          <input type="file" id="fileInput" accept="image/*" />
          <span>mic</span>
          <button>send</button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
