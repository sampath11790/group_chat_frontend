import React from "react";
import cls from "./sidebar.module.css";
import { Avatar, Stack } from "@mui/material";
const UserList = () => {
  return (
    <div className={cls.userlist}>
      {[...Array(20)].map((_, index) => (
        <Stack direction="row" alignItems="center" gap={2} m={2}>
          <Avatar
            sx={{ width: 32, height: 32, objectFit: "cover" }}
            alt=""
            src="https://th.bing.com/th/id/OIP.tfOvEHoC27BUODsx5P7dXwHaLH?pid=ImgDet&rs=1"
          />
          <span>`user ${index}`</span>
        </Stack>
      ))}
    </div>
  );
};

export default UserList;
