import React, { useEffect } from "react";
// import cls from "./sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { GetgroupList } from "../../Store/group/group-thunk";
import { useNavigate } from "react-router-dom";
import { getCurrentGroupMessages } from "../../Store/message/message-thunk";
import { groupSliceAction } from "../../Store/group/groupslice";
import { MessageSliceAction } from "../../Store/message/messageslice";
const Group = () => {
  const { token } = useSelector((state) => state.auth);
  const { groupList } = useSelector((state) => state.group);
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(groupList);
  const joinButtonHandler = (id, name, isAdmin) => {
    navigate("/chatmain");
    Dispatch(getCurrentGroupMessages({ groupid: id }, token));
    Dispatch(groupSliceAction.setCurrentGroupId(id));
    Dispatch(MessageSliceAction.setToggleMenu());
    Dispatch(groupSliceAction.setCurrentGroupName(name));
    Dispatch(groupSliceAction.setIsAdmin(isAdmin));
  };
  useEffect(() => {
    if (token != null) {
      // console.log("calling group", token);
      Dispatch(GetgroupList(token));
    }
  }, [token]);
  return (
    <div>
      {groupList.map((item) => (
        <p key={item.id}>
          {console.log(item)}
          <span>{item.name}</span>

          <button
            onClick={() =>
              joinButtonHandler(item.id, item.name, item.grouplist.admin)
            }
          >
            join
          </button>
        </p>
      ))}
      <button onClick={() => navigate("/creategroup")}>Create group</button>
    </div>
  );
};

export default Group;
