import React from "react";
import cls from "./chat.module.css";
import ChatNav from "./chatNav";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Chat = () => {
  return (
    <div className={cls.Chat_page_cont}>
      <ChatNav></ChatNav>
      <div className={cls.Chat_msg}>
        {[...Array(30)].map((item, index) => (
          <p>`message one ${index}`</p>
        ))}
      </div>
      <div className={cls.Chat_buttom_box}>
        <input type="text" name="text"></input>
        <div className={cls.Chat_botton_elm}>
          <label htmlFor="fileInput">
            <span>📎</span>
          </label>
          <input type="file" id="fileInput" accept="image/*" />
          <span>mic</span>
          <button>send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
