import React from "react";
import cls from "./message.module.css";
import { useSelector } from "react-redux";
const Message = ({ id, message, createdAt, user }) => {
  // const { email } = useSelector((state) => state.auth);
  const name = localStorage.getItem("name");
  const time = (obj) => {
    const currentDate = new Date(obj);
    const dateString = currentDate.toDateString();
    const timeString = currentDate.toLocaleTimeString();

    // const dateTimeString = dateString + " " + timeString;
    // return dateTimeString;
    return timeString;
  };
  return (
    <li key={id} className={name == user ? cls.chatMessage : cls.rightChat}>
      <div>
        <span>{user}</span>
        <span className={cls.time}>{time(createdAt)}</span>
      </div>
      <span className={name == user ? cls.message : cls.messageright}>
        <span
          className={
            name == user ? cls.messageContent : cls.messageContentright
          }
        >
          {message}
        </span>
      </span>
    </li>
  );
};

export default Message;
