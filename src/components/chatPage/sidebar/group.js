import React, { useEffect } from "react";
// import cls from "./sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { DeleteGroup, GetgroupList } from "../../Store/group/group-thunk";
import { useNavigate } from "react-router-dom";
import { getCurrentGroupMessages } from "../../Store/message/message-thunk";
import { groupSliceAction } from "../../Store/group/groupslice";
import { MessageSliceAction } from "../../Store/message/messageslice";
import { Button, IconButton } from "@mui/material";
import { AppShortcut, Create, Delete } from "@mui/icons-material";
const Group = () => {
  const { token } = useSelector((state) => state.auth);
  const { groupList, call } = useSelector((state) => state.group);
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(groupList);
  const joinButtonHandler = (id, name, isAdmin) => {
    navigate("/chatmain");
    localStorage.setItem("groupid", id);
    Dispatch(getCurrentGroupMessages({ groupid: id }, token));
    Dispatch(groupSliceAction.setCurrentGroupId(id));
    Dispatch(MessageSliceAction.setToggleMenu());
    Dispatch(groupSliceAction.setCurrentGroupName(name));
    Dispatch(groupSliceAction.setIsAdmin(isAdmin));
    // console.log(id, name, isAdmin);
  };
  const GroupdeleteHandler = (id) => {
    Dispatch(DeleteGroup(token, id));
  };
  return (
    <div>
      {groupList.map((item) => (
        <p key={item.id}>
          <span>{item.name}</span>

          <Button
            variant="contained"
            sx={{ borderRadius: 20, margin: 1 }}
            onClick={() =>
              joinButtonHandler(item.id, item.name, item.grouplist.admin)
            }
          >
            join
            <AppShortcut></AppShortcut>
          </Button>
          {item.grouplist.admin && (
            <Button
              variant="outlined"
              color="error"
              sx={{ borderRadius: 20, margin: 1 }}
              onClick={() =>
                GroupdeleteHandler(item.id, item.name, item.grouplist.admin)
              }
            >
              <Delete></Delete>
            </Button>
          )}
        </p>
      ))}
      <Button
        variant="contained"
        sx={{ bgcolor: "yellow", color: "black", margin: 5 }}
        onClick={() => navigate("/creategroup")}
      >
        Create group
        <Create></Create>
      </Button>
    </div>
  );
};

export default Group;
