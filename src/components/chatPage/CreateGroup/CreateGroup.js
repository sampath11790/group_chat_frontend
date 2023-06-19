import React, { useState } from "react";
import cls from "./CreateGroup.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createGroup } from "../../Store/group/group-thunk";
import { useNavigate } from "react-router-dom";
import { getCurrentGroupMessages } from "../../Store/message/message-thunk";
import { MessageSliceAction } from "../../Store/message/messageslice";
import { groupSliceAction } from "../../Store/group/groupslice";
const CreateGroup = () => {
  const [group, setgroup] = useState("");
  const { token } = useSelector((state) => state.auth);

  const { groupList } = useSelector((state) => state.group);
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const fromHandler = (e) => {
    e.preventDefault();
    Dispatch(createGroup({ groupname: group }, token));
  };
  const joinButtonHandler = (id, name, isAdmin) => {
    navigate("/chatmain");
    Dispatch(getCurrentGroupMessages({ groupid: id }, token));
    Dispatch(groupSliceAction.setCurrentGroupId(id));
    Dispatch(MessageSliceAction.setToggleMenu());
    Dispatch(groupSliceAction.setCurrentGroupName(name));
    Dispatch(groupSliceAction.setIsAdmin(isAdmin));
  };

  return (
    <div className={cls.main_page_container}>
      <h2>
        Building Bridges, One Chat at a Time: Welcome to our Group Chat
        Community
      </h2>
      <div className={cls.main_container}>
        <div className={cls.img_container}>
          <img
            src="https://www.ndcs.com.sg/sites/shcommonassets/Assets/Events/NCCS/Public%20Events/psp%20event.jpg"
            alt="just image"
          ></img>
        </div>
        <div className={cls.input_container}>
          <form onSubmit={fromHandler}>
            <h3>Creat Group</h3>
            <span>some text some text some textsome text</span>
            <input
              type="text"
              name="group"
              onChange={(e) => setgroup(e.target.value)}
            ></input>
            {/* <span>some text</span> */}
            <button> Create group</button>
          </form>
          <div>
            {groupList.map((item) => (
              <p key={item.id}>
                <span>{item.name}</span> {console.log(item)}
                <button
                  onClick={() =>
                    joinButtonHandler(item.id, item.name, item.grouplist.admin)
                  }
                >
                  join
                </button>
              </p>
            ))}
          </div>
        </div>
      </div>
      <span>
        captures the essence of bringing people together, fostering connection,
        and facilitating meaningful conversations within a group chat
        environment
      </span>
    </div>
  );
};

export default CreateGroup;
