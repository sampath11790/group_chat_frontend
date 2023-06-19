import React, { useEffect } from "react";
import cls from "./sidebar.module.css";
import { Avatar, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { GetGroupMembers, removeMember } from "../../Store/group/group-thunk";
const GroupUserList = () => {
  const { GroupMember, currentGroupid } = useSelector((state) => state.group);
  const Dispatch = useDispatch();
  const { login, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token != null) {
      if (token != null && currentGroupid != null)
        Dispatch(GetGroupMembers(token, currentGroupid));
    }
  }, [token, currentGroupid]);
  const memberRemove = (email) => {
    Dispatch(removeMember({ email: email, groupid: currentGroupid }, token));
  };
  return (
    <div className={cls.userlist}>
      {GroupMember.map((item, index) => (
        <Stack direction="row" alignItems="center" gap={2} m={2} key={item.id}>
          <Avatar
            sx={{ width: 32, height: 32, objectFit: "cover" }}
            alt=""
            src="https://th.bing.com/th/id/OIP.tfOvEHoC27BUODsx5P7dXwHaLH?pid=ImgDet&rs=1"
          />
          <span>{item.email}</span>
          <span>{item.grouplist.admin ? " Admin" : ""}</span>
          <button onClick={() => memberRemove(item.email)}>remove</button>
        </Stack>
      ))}
    </div>
  );
};

export default GroupUserList;