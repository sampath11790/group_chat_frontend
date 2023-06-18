import React from "react";
import cls from "./chat.module.css";
import Logout from "./Logout/Logout";
const ChatNav = () => {
  return (
    <div className={cls.chatNav}>
      <p>Chat Nav</p>
      <div className={cls.chatNav_icons}>
        <p>icon 1</p>
        <p>icon 2</p>
        <p>icon 2</p>
        <Logout></Logout>
      </div>
    </div>
  );
};

export default ChatNav;
