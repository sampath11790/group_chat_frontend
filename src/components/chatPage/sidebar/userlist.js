import React from "react";
import cls from "./sidebar.module.css";
import { Avatar, Stack } from "@mui/material";
import { useSelector } from "react-redux";
const UserList = () => {
  const { GroupMember } = useSelector((state) => state.group);
  return (
    <div className={cls.userlist}>
      {GroupMember.map((item, index) => (
        <Stack direction="row" alignItems="center" gap={2} m={2} key={item.id}>
          <Avatar
            sx={{ width: 32, height: 32, objectFit: "cover" }}
            alt=""
            src="https://th.bing.com/th/id/OIP.tfOvEHoC27BUODsx5P7dXwHaLH?pid=ImgDet&rs=1"
          />
          <span>user {item.email}</span>
        </Stack>
      ))}
    </div>
  );
};

export default UserList;
