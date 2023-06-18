import React from "react";
import cls from "./sidebar.module.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { IconButton } from "@mui/material";
const SidebarNav = () => {
  const name = localStorage.getItem("name");
  return (
    <div className={cls.sidebar_header}>
      <p>Title</p>
      <Stack>
        <IconButton>
          <span>{name || "user"}</span>
          <Avatar
            sx={{ width: 32, height: 32, objectFit: "cover" }}
            alt=""
            src="https://th.bing.com/th/id/OIP.tfOvEHoC27BUODsx5P7dXwHaLH?pid=ImgDet&rs=1"
          />
        </IconButton>
      </Stack>
    </div>
  );
};

export default SidebarNav;
