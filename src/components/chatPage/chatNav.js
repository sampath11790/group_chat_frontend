import React from "react";
import cls from "./chat.module.css";
import Logout from "./Logout/Logout";
import { useSelector } from "react-redux";
import { Avatar, IconButton, Stack } from "@mui/material";
import { AccountCircle, Diversity1, VideoCall } from "@mui/icons-material";
const ChatNav = () => {
  const { currentGroupName } = useSelector((state) => state.group);
  const name = localStorage.getItem("name");
  // console.log("currentGroupName", currentGroupName);
  return (
    <div className={cls.chatNav}>
      <div className={cls.chat_group_title}>
        <Diversity1 sx={{ fontSize: { xs: 30, sm: 30, md: 45 } }}></Diversity1>:
        <p> {currentGroupName}</p>
      </div>
      <Stack
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "cenetr",
        }}
      >
        <AccountCircle></AccountCircle>
        <h3>{name || "user"}</h3>
      </Stack>

      <div className={cls.logout_cont}>
        <div className={cls.chatNav_icons}>
          {/* <p>icon </p> */}

          <IconButton>
            <VideoCall
              sx={{ fontSize: { xs: 30, sm: 30, md: 50 }, color: "white" }}
            ></VideoCall>
          </IconButton>
        </div>
        <Logout></Logout>
      </div>
    </div>
  );
};

export default ChatNav;
