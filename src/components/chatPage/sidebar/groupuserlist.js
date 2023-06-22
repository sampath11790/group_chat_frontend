import React, { useEffect } from "react";
import cls from "./sidebar.module.css";
import { Avatar, Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { GetGroupMembers, removeMember } from "../../Store/group/group-thunk";
import { DeleteForever } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
const GroupUserList = () => {
  const { GroupMember, currentGroupid } = useSelector((state) => state.group);
  const Dispatch = useDispatch();
  const { login, token, email } = useSelector((state) => state.auth);
  const { isAdmin } = useSelector((state) => state.group);

  useEffect(() => {
    if (token != null && currentGroupid != null) {
      Dispatch(GetGroupMembers(token, currentGroupid));
    }
  }, [currentGroupid]);
  const memberRemove = (email) => {
    Dispatch(removeMember({ email: email, groupid: currentGroupid }, token));
  };
  return (
    <div className={cls.userlist}>
      {GroupMember.map((item, index) => (
        <Stack direction="row" alignItems="center" gap={2} m={2} key={item.id}>
          <AccountCircle></AccountCircle>

          <span>{item.email}</span>
          {item.grouplist.admin && (
            <Button
              variant="outlined"
              color="success"
              sx={{ borderRadius: 20, margin: 1 }}
            >
              {item.grouplist.admin ? " Admin" : ""}
            </Button>
          )}
          {isAdmin && !item.grouplist.admin && (
            <Button
              variant="outlined"
              color="error"
              sx={{ borderRadius: 20, margin: 1 }}
              onClick={() => memberRemove(item.email)}
            >
              <DeleteForever></DeleteForever>
            </Button>
          )}
        </Stack>
      ))}
    </div>
  );
};

export default GroupUserList;
