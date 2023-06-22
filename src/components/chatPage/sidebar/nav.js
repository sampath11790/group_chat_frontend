import React from "react";
import cls from "./sidebar.module.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { IconButton } from "@mui/material";
import { AccountCircle, Telegram } from "@mui/icons-material";
const SidebarNav = () => {
  const name = localStorage.getItem("name");
  return (
    <div className={cls.sidebar_header}>
      <div className={cls.sidebar_Title}>
        <h2>Group Wave</h2>
        <Telegram
          sx={{ fontSize: { xs: 30, sm: 30, md: 50 }, color: "gold" }}
        ></Telegram>
      </div>
      <div className={cls.sidebar_Username}>
        <AccountCircle></AccountCircle>
        <h3>{name || "No user"}</h3>
      </div>
    </div>
  );
};

export default SidebarNav;
