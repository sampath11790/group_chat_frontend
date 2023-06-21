import React, { useEffect } from "react";
import cls from "./sidebar.module.css";
import { Avatar, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { GetAllMembers } from "../../Store/group/group-thunk";
const UserList = () => {
  const { UserList } = useSelector((state) => state.group);
  const Dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token != null) {
      Dispatch(GetAllMembers(token));
    }
  }, [token]);
  return (
    <div className={cls.userlist}>
      {UserList.map((item, index) => (
        <Stack direction="row" alignItems="center" gap={2} m={2} key={item.id}>
          <Avatar
            sx={{ width: 32, height: 32, objectFit: "cover" }}
            alt=""
            src="https://th.bing.com/th/id/OIP.tfOvEHoC27BUODsx5P7dXwHaLH?pid=ImgDet&rs=1"
          />
          <span>{item.email}</span>
        </Stack>
      ))}
    </div>
  );
};

export default UserList;
