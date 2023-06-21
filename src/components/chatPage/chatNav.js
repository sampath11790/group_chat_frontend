import React from "react";
import cls from "./chat.module.css";
import Logout from "./Logout/Logout";
import { useSelector } from "react-redux";
const ChatNav = () => {
  const { currentGroupName } = useSelector((state) => state.group);
  // console.log("currentGroupName", currentGroupName);
  return (
    <div className={cls.chatNav}>
      <p>GroupName:{currentGroupName}</p>
      <div className={cls.chatNav_icons}>
        <p>icon 1</p>
        {/* <p>icon 2</p>
        <p>icon 2</p> */}
        <Logout></Logout>
      </div>
    </div>
  );
};

export default ChatNav;
